<template>
    <div v-if="currentCard" id="deck-study" v-bind:class="{flipped: flipped}">
        <div id="front">
            <p class="card card-front">{{ currentCard.front }}</p>
            <div class="study-buttons">
                <button id="button-flip-card" @click="flip()">Flip !</button>
            </div>
        </div>
        <div id="back">
            <p class="card card-back">{{ currentCard.back }}</p>
            <div class="study-buttons">
                <button id="button-wrong" @click="onWrongButtonClick()">Wrong</button>
                <button id="button-right" @click="onCorrectButtonClick()">Correct</button>
            </div>
        </div>
    </div>
</template>

<script src="./DeckStudy.js"></script>
<style src="./DeckStudy.css"></style>