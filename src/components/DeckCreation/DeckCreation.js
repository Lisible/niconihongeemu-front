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
		close: function(){
			this.$parent.closePopup();
		},
		createDeck: async function() {
			DeckAPI.createDeck(this.$data.deckName, AccessToken.token)
			console.log("createDeck: " + this.$data.deckName);
			
		}
	}
}