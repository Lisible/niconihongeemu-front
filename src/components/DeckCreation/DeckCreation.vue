<template>
	<div id="deck-creation" class="form">
		<h2>Create a deck</h2>
		<div class="form-entry">
			<label for="deck-name">Deck name</label>
			<input type="text" name="deck-name" v-model="deckName" @keyup.enter="createDeck()">
		</div>
		<div class="form-buttons">
			<button @click="close()">NicoNicancel</button>
			<button class="button-red" @click="createDeck()">NicoNicreate deck</button>
		</div>
	</div>
</template>

<script src="./DeckCreation.js"></script>
<style src="./DeckCreation.css"></style>