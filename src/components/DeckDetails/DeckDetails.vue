<template>
	<div v-if="currentDeck" id="deck-details" class="form">
		<h2>{{ currentDeck.getName() }}</h2>
		<span>This deck contains {{ currentDeck.getCardCount() }} card</span>
		<span>There are  {{ currentDeck.getCardToReviseCount() }} card left to revise today</span>
		<div class="form-buttons">
			<button v-bind:disabled="currentDeck.getCardToReviseCount() === 0" @click="studyDeck()">Study</button>
			<button @click="showDeckCards()">Cards</button>
			<button @click="deleteDeck()">Delete</button>
			<button @click="exportJson()" style="max-width: initial;">Export</button>
		</div>
	</div>
</template>

<script src="./DeckDetails.js"></script>
<style src="./DeckDetails.css"></style>