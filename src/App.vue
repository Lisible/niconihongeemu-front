<template>
  <div id="app">
    <header>
      <h1>NicoNihonGeemu</h1>
    </header>
    <div id="main-wrapper">
        <search-bar></search-bar>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar/SearchBar.vue'

export default {
  name: 'app',
  components: {
    SearchBar
  }
}
</script>

<style>
#main-wrapper {
    margin: 2em;
}
</style>
