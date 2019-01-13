import AccessToken from '@/model/AccessToken'
import DeckAPI from '@/model/api/DeckAPI'


export default {
    name: 'deck-recent',
    data() {
        return {
            decks: []
        }
    },
    created: async function() {
        this.reloadDecks();
    },
    methods: {
        /**
         * Shows the details of a deck
         * @param id The id of the deck
         */
        showDeckDetails: function(id) {
            this.$eventBus.$emit('ShowDeckDetails', id);
        },
        /**
         * Reloads the decks
         */
        reloadDecks: async function() {
            this.$data.decks = await DeckAPI.getUserDecks(AccessToken.token);
        },
    }
}