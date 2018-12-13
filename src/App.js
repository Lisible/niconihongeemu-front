import SearchBarComponent from './components/SearchBar/SearchBar.vue'
import SearchResultComponent from './components/SearchResult/SearchResult.vue'
import DeckDashboardComponent from './components/DeckDashboard/DeckDashboard.vue'
import LoginComponent from './components/Login/Login.vue'
import RegisterComponent from './components/Register/Register.vue'

import SearchResult from './model/SearchResult'
import SearchResultList from './model/SearchResultList'
import WordProvider from './model/WordProvider'
import KanjiProvider from './model/KanjiProvider'


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
        this.$on('AccountCreationRequest', () => {
            //this.$data.perspective = 'register';
        });
        this.$on('ConnectionRequest', () => {
            this.$data.perspective = 'home';
        });

        this.$on('SearchEvent', (query, type) => {
            this.$data.searchStarted = true;
            this.$data.perspective = 'search';
            let searchResultList = new SearchResultList();
            let wp = new WordProvider();
            let kp = new KanjiProvider();
            let searchType = document.getElementsByName("search-type")[0].value;


            if (searchType == 1) {
                wp.searchWord(query).then(results => {
                    this.$data.searchStarted = false;

                    results.forEach(r => {
                        searchResultList.addSearchResult(new SearchResult('word', r));
                    });

                    this.refreshSearchResult(searchResultList);
                });


                kp.searchKanji(query).then(results => {
                    this.$data.searchStarted = false;

                    results.forEach(r => {
                        searchResultList.addSearchResult(new SearchResult('kanji', r));
                    });

                    this.refreshSearchResult(searchResultList);
                });
            } else if (searchType == 2) {
                wp.searchWord(query).then(results => {
                    this.$data.searchStarted = false;

                    results.forEach(r => {
                        searchResultList.addSearchResult(new SearchResult('word', r));
                    });

                    this.refreshSearchResult(searchResultList);
                });
            } else if (searchType == 3) {
                kp.searchKanji(query).then(results => {
                    this.$data.searchStarted = false;

                    results.forEach(r => {
                        searchResultList.addSearchResult(new SearchResult('kanji', r));
                    });

                    this.refreshSearchResult(searchResultList);
                });
            }
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