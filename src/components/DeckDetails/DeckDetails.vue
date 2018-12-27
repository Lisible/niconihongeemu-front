<template>
	<div v-if="currentDeck" id="deck-details" class="form">
		<h2>{{ currentDeck.getName() }}</h2>
		<span>This deck contains 0 card</span>
		<span>It was last studied on 01/01/2019</span>
		<div class="form-buttons">
			<button disabled>Study</button>
			<button>Cards</button>
			<button @click="deleteDeck()">Delete</button>
		</div>
	</div>
</template>

<script src="./DeckDetails.js"></script>
<style src="./DeckDetails.css"></style>