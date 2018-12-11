import SearchBarComponent from './components/SearchBar/SearchBar.vue'
import SearchResultComponent from './components/SearchResult/SearchResult.vue'
import DeckDashboardComponent from './components/DeckDashboard/DeckDashboard.vue'

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
  },
  created: function() {
    this.$on('SearchEvent', (query, type) => {
      this.$data.searchStarted = true;
      this.$data.searching = true;
      let searchResultList = new SearchResultList();

      var searchType = document.getElementsByName('search-type');
      console.log(searchType);

      let wp = new WordProvider();
      wp.searchWord(query).then(results => {
        this.$data.searchStarted = false;
        
        results.forEach(r => {
          searchResultList.addSearchResult(new SearchResult('word', r));
        });
        
        this.refreshSearchResult(searchResultList);
      });

      let kp = new KanjiProvider();
      kp.searchKanji(query).then(results => {
        this.$data.searchStarted = false;
        
        results.forEach(r => {
          searchResultList.addSearchResult(new SearchResult('kanji', r));
        });
        
        this.refreshSearchResult(searchResultList);
      });
    });
  },
  methods: {
    refreshSearchResult: function(searchResultList){
      this.$refs.searchResult.setSearchResultList(searchResultList);
    }
  },
  data: function(){
    return {
      searching: false,
      searchStarted: false,
    }
  }
}