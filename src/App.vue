<template>
  <div id="app">
    <header>
      <h1>NicoNihonGeemu</h1>
    </header>
    <div id="main-wrapper">
        <search-bar></search-bar>
        <search-result v-if="searching"></search-result>
    </div>
  </div>
</template>

<script>
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
      searching: false
    }
  }
}
</script>

<style>
#main-wrapper {
    margin: 2em;
}
</style>
