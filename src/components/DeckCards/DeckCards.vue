<template>
    <div id="deck-cards">
        <h1>Deck cards</h1>
        <ul>
            <li v-for="(card, key) in cards" :key="key" >
                <button class="button-delete-card fas fa-trash-alt" @click="deleteCard(key)">Delete</button>
                <div class="card-front">
                    <textarea wrap="hard" v-model="card.front" v-on:blur="finishedEditing(card)"></textarea>
                </div>
                <div class="card-back">
                    <textarea wrap="hard" v-model="card.back" v-on:blur="finishedEditing(card)"></textarea>
                </div>
            </li>
            <li><button id="button-add-card" @click="addCard()">Add a card</button></li>
            <li><button id="button-save-deck" @click="saveDeck()">Save changes</button></li>
        </ul>
    </div>
</template>

<script src="./DeckCards.js"></script>
<style src="./DeckCards.css"></style>