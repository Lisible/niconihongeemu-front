<template>
  <div id="app">
    <header>
      <h1 v-bind:class="{ bump: searchStarted }">NicoNihonGeemu</h1>

      <nav>
        <button class="fas fa-home">Home</button>
        <button class="fas fa-search">Search</button>
        <button  class="fas fa-atlas">Deck</button>
      </nav>
    </header>
    <div id="main-wrapper">
        <search-bar v-if="perspective == 'home' || perspective == 'search'"></search-bar>
        <search-result v-if="perspective == 'search'" ref="searchResult"></search-result>
        <deck-dashboard v-if="perspective == 'home'"></deck-dashboard>
        <login v-if="perspective == 'login'"></login>
        <register v-if="perspective == 'register'"></register>
    </div>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>
<style src="./App.tablet.css"></style>