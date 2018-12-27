import DeckAPI from '@/model/api/DeckAPI';
import AccessToken from "../../model/AccessToken";


export default {
	name: 'deck-details',
	props: ['shownDeck'],
	created: async function() {
		this.$data.currentDeck = await DeckAPI.getUserDeck(AccessToken.token, this.$props.shownDeck);
	},
	methods: {
        /**
         * Deletes the deck and redirects to the deck dashboard
         */
        deleteDeck: async function() {
            await DeckAPI.deleteDeck(AccessToken.token, this.$data.currentDeck.getId());
            this.$eventBus.$emit('ChangePerspective', 'deck-dashboard');
        },
        /**
         * Redirects to the DeckCards view
         */
        showDeckCards: async function() {
            this.$eventBus.$emit('ChangePerspective', 'deck-cards');
        }
	},
	data: function() {
		return {
			currentDeck: null
		}
	}
}