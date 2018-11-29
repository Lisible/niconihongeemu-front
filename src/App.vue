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

<script src="./App.js"></script>
<style src="./App.css"></style>