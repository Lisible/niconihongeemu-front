import DeckAPI from '@/model/api/DeckAPI'
import AccessToken from '@/model/AccessToken'


const MINIMUM_DELAY = 24 * 3600 * 1000;

export default {
    name: 'deck-study',
    props: ['deckId'],
    data: function() {
        return {
            deckCards: [],
            currentCard: null,
            flipped: false,
        }
    },
    created: async function() {
        this.$data.deckCards = await DeckAPI.getDeckCards(AccessToken.token, this.$props.deckId);
        this.nextCard();
    },
    methods: {
        flip: function() {
            this.flipped = !this.flipped;
        },
        onWrongButtonClick: async function() {
            this.currentCard.nextRevisionDate = +Date.now() + MINIMUM_DELAY;
            this.currentCard.streak = 0;
            await DeckAPI.editCard(AccessToken.token, this.$props.deckId, this.currentCard);
            this.nextCard();
        },
        onCorrectButtonClick: async function() {
            this.currentCard.streak++;
            this.currentCard.nextRevisionDate = +Date.now() + MINIMUM_DELAY * (this.currentCard.streak + 1);
            this.nextCard();
        },
        nextCard: function() {
            this.$data.currentCard = this.deckCards.filter(card => card.nextRevisionDate < Date.now() 
                                                                    || card.nextRevisionDate == 0)[0];
            this.flipped = false;
        }
    }
}