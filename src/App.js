import SearchBarComponent from './components/SearchBar/SearchBar.vue'
import SearchResultComponent from './components/SearchResult/SearchResult.vue'

import SearchResult from './model/SearchResult'
import SearchResultList from './model/SearchResultList'
import WordProvider from './model/WordProvider'


export default {
  name: 'app',
  components: {
    'SearchBar': SearchBarComponent,
    'SearchResult': SearchResultComponent
  },
  created: function() {
    this.$on('SearchEvent', (query, type) => {
      let wp = new WordProvider();
      wp.searchWord(query).then(results => {
        let searchResultList = new SearchResultList();
        
        results.forEach(r => {
          searchResultList.addSearchResult(new SearchResult('word', r));
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
      searching: true
    }
  }
}