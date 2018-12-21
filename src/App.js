import SearchBarComponent from './components/SearchBar/SearchBar.vue'
import SearchResultComponent from './components/SearchResult/SearchResult.vue'
import DeckDashboardComponent from './components/DeckDashboard/DeckDashboard.vue'
import LoginComponent from './components/Login/Login.vue'
import RegisterComponent from './components/Register/Register.vue'
import AccessToken from './model/AccessToken';


import User from './model/User'


export default {
    name: 'app',
    components: {
        'SearchBar': SearchBarComponent,
        'SearchResult': SearchResultComponent,
        'DeckDashboard': DeckDashboardComponent,
        'Login': LoginComponent,
        'Register': RegisterComponent,
    },
    created: function() {
        this.$on('ConnectionEvent', (access_token) => {
            AccessToken.token = access_token;
            this.changePerspective('home');
        });

        this.$on('SearchStartedEvent', () => {
            this.changePerspective('search');
            this.$data.searchStarted = true;
        });

        this.$on('SearchFinishedEvent', (searchResults) => {
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
            popupShown: false
        }
    }
}