import SearchBar from './components/SearchBar/SearchBar.vue'
import SearchResult from './components/SearchResult/SearchResult.vue'

export default {
  name: 'app',
  components: {
    SearchBar,
    SearchResult
  },
  data: function(){
    return {
      searching: true
    }
  }
}