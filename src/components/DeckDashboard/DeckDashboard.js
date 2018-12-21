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
    	const decks = await DeckAPI.getUserDecks(AccessToken.token);
    	this.$data.decks = decks;
    },
	methods: {
        showDeckCreationPopup: function() {
            const ComponentClass = Vue.extend(DeckCreationComponent);
            this.$parent.showPopup(ComponentClass);
        },
	}
}