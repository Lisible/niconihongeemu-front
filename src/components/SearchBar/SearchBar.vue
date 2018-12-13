<template>
	<div id="search-bar">
		<input type="text" name="search-input" @keyup.enter="search" v-model="query">
		<select v-model="type" name="search-type">
			<option v-bind:value="SearchType.ANY">Any</option>
			<option v-bind:value="SearchType.WORD">Word</option>
			<option v-bind:value="SearchType.KANJI">Kanji</option>
		</select>
		<button id="search-button" class="fas fa-search" ref="searchButton" @click="search">Search</button>
	</div>
</template>

<script src="./SearchBar.js"></script>
<style src="./SearchBar.css"></style>