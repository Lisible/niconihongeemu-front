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
        /**
        * Adds a blank card to a deck
        */
        addCard: async function() {
            const response = await DeckAPI.addCard(AccessToken.token, this.deckId, new Card(null, "Front", "Back"));
            if(response.status == 200) {
                const addedCard = await response.json();
                this.cards.push(addedCard);
            }
        },
        /**
        * Deletes a card from a deck
        * @param cardIndex The index of the card to be deleted
        */
        deleteCard: async function(cardIndex) {
            const cardId = this.cards[cardIndex].id;
            const response = await DeckAPI.deleteCard(AccessToken.token, this.deckId, cardId);
            if(response.status == 200)
                this.cards.splice(cardIndex, 1);
        },
        /**
        * Saves the changes made to a given card
        * @param card The card that was edited
        */
        finishedEditing: async function(card) {
            await DeckAPI.editCard(AccessToken.token, this.deckId, card);
        },
        /**
        * Loads the cards of a given deck
        * @param shownDeckId The id of the given deck
        */
        loadDeckCards: async function(shownDeckId) {
            this.cards = await DeckAPI.getDeckCards(AccessToken.token, shownDeckId);
        },
    }
}