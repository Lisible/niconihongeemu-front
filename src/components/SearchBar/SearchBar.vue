<template>
	<div id="search-bar">
		<input type="text" name="search-input" v-model="query">
		<select v-model="type" name="search-type">
			<option v-bind:value="'any'">Any</option>
			<option v-bind:value="'word'">Word</option>
			<option v-bind:value="'kanji'">Kanji</option>
		</select>
		<button id="search-button" ref="searchButton" @click="triggerSearchEvent">Search</button>
	</div>
</template>

<script src="./SearchBar.js"></script>
<style src="./SearchBar.css"></style>