import Vue from 'vue'
import DeckCreationComponent from '@/components/DeckCreation/DeckCreation.vue'

export default {
	name: 'deck-dashboard',
	data() {
		return {
		}
	},
	methods: {
        showDeckCreationPopup: function() {
            const ComponentClass = Vue.extend(DeckCreationComponent);
            this.$parent.showPopup(ComponentClass);
        },
        showDeckDetails: function() {
        	this.$parent.changePerspective('deck-details');
        }
	}
}