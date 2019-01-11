<template>
  <div id="app">
    <header>
      <h1 v-bind:class="{ bump: searchStarted }">NicoNihonGeemu</h1>

      <nav v-if="perspective !== 'login' && perspective !== 'register'">
        <button class="fas fa-home" v-bind:class="{'current-nav': perspective === 'home'}" @click="changePerspective('home')">Home</button>
        <button class="fas fa-search" v-bind:class="{'current-nav': perspective === 'search'}" @click="changePerspective('search')">Search</button>
        <button  class="fas fa-atlas" v-bind:class="{'current-nav': perspective === 'deck-dashboard'}" @click="changePerspective('deck-dashboard')">Deck</button>
      </nav>
    </header>
    <div id="main-wrapper" ref="mainWrapper">
        <div id="popup" ref="popup" v-bind:style="{'display': popup !== null ? 'block' : 'none'}" v-bind:class="{'shown': popupShown}"></div>
        <search-bar v-if="perspective === 'home' || perspective === 'search'"></search-bar>
        <search-result v-if="perspective === 'search'" ref="searchResult"></search-result>
        <deck-dashboard v-if="perspective === 'deck-dashboard'"></deck-dashboard>
        <login v-if="perspective === 'login'"></login>
        <register v-if="perspective === 'register'"></register>
        <deck-details v-if="perspective === 'deck-details'" v-bind="{shownDeck: shownDeck}"></deck-details>
        <deck-cards v-if="perspective === 'deck-cards'" v-bind="{shownDeck: shownDeck}"></deck-cards>
        <deck-study v-if="perspective === 'deck-study'" v-bind="{deckId: shownDeck}"></deck-study>
        <deck-recent v-if="perspective === 'home'"></deck-recent>
    </div>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>
<style src="./App.tablet.css"></style>