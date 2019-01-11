import Vue from 'vue'
import DeckCreationComponent from '@/components/DeckCreation/DeckCreation.vue'

import AccessToken from '@/model/AccessToken'
import DeckAPI from '@/model/api/DeckAPI'


export default {
	name: 'deck-dashboard',
	data() {
		return {
			decks: []
		}
	},
	created: async function() {
		this.reloadDecks();

		this.$eventBus.$on("DeckCreated", () => {
			this.reloadDecks();
		});
	},
	methods: {
        showDeckDetails: function(id) {
        	this.$parent.changePerspective('deck-details');
        },
		showDeckCreationPopup: function() {
			const ComponentClass = Vue.extend(DeckCreationComponent);
			this.$eventBus.$emit("ShowPopup", ComponentClass);
		},
		reloadDecks: function() {
			setTimeout(async () => {
				console.log("reload decks");
				const decks = await DeckAPI.getUserDecks(AccessToken.token);
				this.$data.decks = decks;
			}, 100);
		},
	}
}