<template>
	<div id="search-bar">
		<input type="text" name="search-input">
		<select name="search-type">
			<option value="any">*</option>
			<option value="word">Word</option>
			<option value="kanji">字</option>
		</select>
		<button id="search-button">Search</button>
	</div>
</template>

<script src="./SearchBar.js"></script>
<style src="./SearchBar.css"></style>