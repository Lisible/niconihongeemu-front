import SearchBar from './components/SearchBar/SearchBar.vue'
import SearchResult from './components/SearchResult/SearchResult.vue'

export default {
  name: 'app',
  components: {
    SearchBar,
    SearchResult
  },
  created: function() {
    this.$on('SearchEvent', (query, type) => {
      console.log(type);
    });
  },
  methods: {

  },
  data: function(){
    return {
      searching: true
    }
  }
}