import Card from '@/model/Card'
import DeckAPI from '@/model/api/DeckAPI'
import AccessToken from '@/model/AccessToken'

export default {
    name: 'deck-cards',
    props: ['shownDeck'],
    data: function() {
        return {
            cards: []
        }
    },
    created: async function() {
        this.deckId = this.$props.shownDeck;
        await this.loadDeckCards(this.deckId);
    },
    methods: {
        addCard: async function() {
            // TODO Récupérer l'id sinon l'edit ne marche pas
            const card = new Card(null, "Front", "Back");
            const response = await DeckAPI.addCard(AccessToken.token, this.deckId, card);
            if(response.status == 200)
                this.cards.push(card);
        },
        deleteCard: async function(cardIndex) {
            const cardId = this.cards[cardIndex].id;
            const response = await DeckAPI.deleteCard(AccessToken.token, this.deckId, cardId);
            console.log(response);
            if(response.status == 200)
                this.cards.splice(cardIndex, 1);
        },
        finishedEditing: async function(card) {
            const response = await DeckAPI.editCard(AccessToken.token, this.deckId, card);
        },
        saveDeck: function() {
            this.$eventBus.$emit("ChangePerspective", "deck-dashboard");
        },
        loadDeckCards: async function(shownDeckId) {
            this.cards = await DeckAPI.getDeckCards(AccessToken.token, shownDeckId);
            console.log(this.cards);
        },
    }
}