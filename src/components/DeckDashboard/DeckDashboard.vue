<template>
	<div id="deck-dashboard">
		<h1>Your decks</h1>
		<ul>
			<li v-for="deck in decks">
				<div class="deck">
					{{ deck.name }}
				</div>
			</li>
			<li>
				<button id="button-deck-add" class="fas fa-plus" @click="showDeckCreationPopup()">Add</button>
			</li>
			<li>
				<button id="button-deck-settings" class="fas fa-cog">Settings</button>
			</li>
		</ul>
	</div>
</template>

<script src="./DeckDashboard.js"></script>
<style src="./DeckDashboard.css"></style>