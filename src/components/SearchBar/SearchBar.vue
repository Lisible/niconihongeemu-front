<template>
	<div id="search-bar">
		<input type="text" name="search-input">
		<select name="search-type">
			<option value="any">Any</option>
			<option value="word">Word</option>
			<option value="kanji">Kanji</option>
		</select>
		<button id="search-button" ref="searchButton">Search</button>
	</div>
</template>

<script src="./SearchBar.js"></script>
<style src="./SearchBar.css"></style>