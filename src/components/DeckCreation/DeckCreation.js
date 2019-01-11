import AccessToken from '@/model/AccessToken'
import DeckAPI from '@/model/api/DeckAPI'

export default {
	name: 'deck-creation',
	data() {
		return {
			deckName: ''
		}
	},
	methods: {
		/**
		 * Closes the popup
		 */
		close: function(){
			this.$parent.closePopup();
		},

		/**
		 * Creates the deck and closes the popup
		 */
		createDeck: async function() {
			DeckAPI.createDeck(this.$data.deckName, AccessToken.token);
			this.$eventBus.$emit("DeckCreated");
            this.$eventBus.$emit("ClosePopup");
		}
	}
}