<template>
    <div id="deck-recent">
        <h1>Recently studied decks</h1>
        <ul>
            <li v-for="(deck, key) in decks" @click="showDeckDetails()" :key="key">
                <div class="deck">
					<span class="deck-name">{{ deck.getName() }}
					</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script src="./DeckRecent.js"></script>
<style src="./DeckRecent.css"></style>