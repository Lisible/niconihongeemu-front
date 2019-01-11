<template>
    <div id="deck-recent">
        <h1>Decks to revise</h1>
        <ul>
            <li v-for="(deck, key) in decks.filter((deck) => deck.getCardToReviseCount() > 0) " @click="showDeckDetails(deck.getId())" :key="key">
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