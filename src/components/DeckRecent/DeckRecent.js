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
        showDeckDetails: function(id) {
            this.$eventBus.$emit('ShowDeckDetails', id);
        },
        reloadDecks: function() {
            setTimeout(async () => {
                this.$data.decks = await DeckAPI.getUserDecks(AccessToken.token);
            }, 100); 
        },
    }
}