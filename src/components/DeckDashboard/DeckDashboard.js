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
        /**
         * Redirects on the DeckDetails view for the clicked deck
         * @param id The id of the clicked deck
         */
        showDeckDetails: function(id) {
            this.$eventBus.$emit('ShowDeckDetails', id);
        },
        /**
         * Displays the dekc creation popup
         */
        showDeckCreationPopup: function() {
            const ComponentClass = Vue.extend(DeckCreationComponent);
            this.$eventBus.$emit("ShowPopup", ComponentClass);
        },
        /**
         * Reloads the decks from the database
         */
        reloadDecks: function() {
            setTimeout(async () => {
                this.$data.decks = await DeckAPI.getUserDecks(AccessToken.token);
            }, 100);
        },

        /**
        * Imports an external deck
        * @param deck The external deck to import
        */
        importDeck: async function(deck) {
            await DeckAPI.importDeck(deck.name, deck.cardList, AccessToken.token);
            this.reloadDecks();
        },

        /**
        * Opens a file dialog to get JSON data from file
        */
        importJson: function() {
            let fileInput = document.createElement('input');
            fileInput.style.display = 'none';
            fileInput.type = 'file';
            fileInput.name = 'file';
            document.body.appendChild(fileInput);
            fileInput.click();
            fileInput.addEventListener("change", async (e) => {       
                const file = e.target.files[0];
                let fileReader = new FileReader();
                fileReader.onload = async (event) => {
                    const deckToImport = JSON.parse(event.target.result);
                    await this.importDeck(deckToImport);
                } ;
                fileReader.readAsText(file);
            });
            setTimeout(function(){
                document.body.removeChild(fileInput);
            }, 0);
        },
    }
}