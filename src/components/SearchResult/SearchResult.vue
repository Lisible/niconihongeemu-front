<template>
	<ul v-if="searchResultList !== null" id="search-result">
		<li v-for="searchResult in searchResultList.getSearchResults()">

			<div v-if="searchResult.getType() === 'kanji'" class="kanji-result">
				<span>{{ searchResult.getResult().getLiteral() }}</span>
				<section v-if="searchResult.getResult().getReadings().length > 0">
					<h1>Readings</h1>
					<ul class="writing-list">
						<li v-for="reading in searchResult.getResult().getReadings()">
							{{ reading }}
						</li>
					</ul>
				</section>
				<section v-if="searchResult.getResult().getMeanings().length > 0">
					<h1>Meanings</h1>
					<ul class="writing-list">
						<li v-for="meaning in searchResult.getResult().getMeanings()">
							{{ meaning }}
						</li>
					</ul>
				</section>
				<section>
					<h1>Details</h1>
					<span>Stroke count: {{ searchResult.getResult().getStrokeCount() }}</span>
					<span v-if="searchResult.getResult().getJLPTLevel() !== null">JLPT N{{ searchResult.getResult().getJLPTLevel() }}</span>
				</section>
			</div>
			<div v-if="searchResult.getType() === 'word'" class="word-result">
				<section v-if="searchResult.getResult().getKanjiWritings().length > 0">
					<h1>Kanji writings</h1>
					<ul class="writing-list">
						<li v-for="kanjiWriting in searchResult.getResult().getKanjiWritings()">{{ kanjiWriting }}</li>
					</ul>
				</section>

				<section v-if="searchResult.getResult().getKanaWritings().length > 0">
					<h1>Kana writings</h1>
					<ul class="writing-list">
						<li v-for="kanaWriting in searchResult.getResult().getKanaWritings()">{{ kanaWriting }}</li>
					</ul>
				</section>

				<section v-if="searchResult.getResult().getKanaWritings().length > 0">
					<h1>Romaji transcription</h1>
					<ul class="writing-list">
						<li v-for="romajiWriting in searchResult.getResult().getRomajiWritings()">{{ romajiWriting }}</li>
					</ul>
				</section>

				<section v-if="searchResult.getResult().getMeanings().length > 0">
					<h1>Meanings</h1>
					<ol>
						<li v-for="meaning in searchResult.getResult().getMeanings()">{{ meaning }}</li>
					</ol>
				</section>	
			</div>
		</li>
	</ul>
</template>

<script src="./SearchResult.js"></script>
<style src="./SearchResult.css"></style>