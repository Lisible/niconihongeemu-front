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
      searching: true
    }
  }
}
</script>

<style>
#main-wrapper {
    margin: 2em;
}

header {
  height: 3em;
  line-height: 3em;
  padding: 0.5em;
  vertical-align: middle;
  overflow: hidden;
}

header h1 {
  padding: 0;
  vertical-align: middle;
  transition: opacity 0.8s 0.5s;
}

header h1:before {
  display: inline-block;
  position: relative;
  overflow: hidden;
  float: left;
  font-size: 3rem;
  padding-right: 0.2em;
  content: '';
  background-image: url(assets/img/nico.svg);
  background-size: 1em 1em;
  background-repeat: no-repeat;
  width: 1em;
  height: 1em;
  transition: margin-left 3s, transform 1s 0.5s;
}

header h1:hover:before {
  margin-left: 100%;
  transform: rotateZ(360deg);
  opacity: 1;
  transition: margin-left 3s, transform 1s;
}

header h1:hover {
  opacity: 0;
  transition: opacity 0.5s 0.8s;
}


</style>
