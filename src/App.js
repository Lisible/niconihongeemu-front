import SearchBarComponent from './components/SearchBar/SearchBar.vue'
import SearchResultComponent from './components/SearchResult/SearchResult.vue'
import DeckDashboardComponent from './components/DeckDashboard/DeckDashboard.vue'
import DeckRecentComponent from './components/DeckRecent/DeckRecent.vue'
import LoginComponent from './components/Login/Login.vue'
import RegisterComponent from './components/Register/Register.vue'
import DeckDetailsComponent from './components/DeckDetails/DeckDetails.vue'


export default {
    name: 'app',
    components: {
        'SearchBar': SearchBarComponent,
        'SearchResult': SearchResultComponent,
        'DeckDashboard': DeckDashboardComponent,
        'DeckRecent': DeckRecentComponent,
        'Login': LoginComponent,
        'Register': RegisterComponent,
        'DeckDetails': DeckDetailsComponent,
    },
    created: function() {
        this.$eventBus.$on('ShowDeckDetails', (id) => {
            this.$data.shownDeck = id;
            this.changePerspective('deck-details');
        });

        this.$eventBus.$on('ChangePerspective', (perspectiveName) => {
           this.changePerspective(perspectiveName);
        });

        this.$eventBus.$on('SearchStartedEvent', () => {
            this.changePerspective('search');
            this.$data.searchStarted = true;
        });

        this.$eventBus.$on('SearchFinishedEvent', (searchResults) => {
            this.$data.searchStarted = false;
            this.refreshSearchResult(searchResults)
        });

        this.$eventBus.$on('ShowPopup', this.showPopup);
        this.$eventBus.$on('ClosePopup', this.closePopup);
    },
    methods: {
        refreshSearchResult: function(searchResultList) {
            this.$refs.searchResult.setSearchResultList(searchResultList);
        },
        changePerspective: function(perspective) {
            this.$data.perspective = perspective;
        },
        showPopup: function(componentClass) {
            let componentInstance = new componentClass();
            componentInstance.$parent = this;
            this.$data.popup = componentInstance;
            componentInstance.$mount();
            this.$refs.popup.innerHTML = '';
            this.$refs.popup.appendChild(componentInstance.$el);

            setTimeout(() => {
                this.$data.popupShown = true;
            }, 10);
        },
        closePopup: function() {
            this.$data.popupShown = false;

            setTimeout(() => {
                this.$data.popup = null;
                this.$refs.popup.innerHTML = '';
            }, 200);
        }
    },
    data: function() {
        return {
            searchStarted: false,
            perspective: 'login',
            popup: null,
            popupShown: false,
            shownDeck: null
        }
    }
}