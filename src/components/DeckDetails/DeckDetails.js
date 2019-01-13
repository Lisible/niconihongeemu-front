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
        showDeckCards: function() {
            this.$eventBus.$emit('ChangePerspective', 'deck-cards');
        },
        /**
         *  Redirects to the DeckStudy view
         */
         studyDeck: function() {
            this.$eventBus.$emit('ChangePerspective', 'deck-study');
         },

        /**
         * Exports a given deck to a JSON file
         */
         exportJson: function() {
            let fileData = JSON.parse(JSON.stringify(this.$data.currentDeck));

            // Removing IDs on the copied object
            delete fileData.id;
            fileData.cardList = fileData.cardList.map(c => { delete c.id; return c; });
            fileData = JSON.stringify(fileData);

            const downloadElement = document.createElement('a');
            downloadElement.href = 'data:text/plain;charset=utf-8,' + fileData;
            downloadElement.download = 'deck.json';
            document.body.appendChild(downloadElement);
            downloadElement.click();
            setTimeout(() => {
                document.body.removeChild(downloadElement);
            }, 0);
         }
	},
	data: function() {
		return {
			currentDeck: null
		}
	}
}