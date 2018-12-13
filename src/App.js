import SearchBarComponent from './components/SearchBar/SearchBar.vue'
import SearchResultComponent from './components/SearchResult/SearchResult.vue'
import DeckDashboardComponent from './components/DeckDashboard/DeckDashboard.vue'
import LoginComponent from './components/Login/Login.vue'
import RegisterComponent from './components/Register/Register.vue'


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
            console.log(access_token);
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
    },
    methods: {
        refreshSearchResult: function(searchResultList) {
            this.$refs.searchResult.setSearchResultList(searchResultList);
        },
        changePerspective: function(perspective) {
            this.$data.perspective = perspective;
        }
    },
    data: function() {
        return {
            searchStarted: false,
            perspective: 'login',
        }
    }
}