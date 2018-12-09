export default class Word {
	constructor(kanjiWritings, kanaWritings, romajiWritings, meanings) {
		this.kanjiWritings = kanjiWritings;
		this.kanaWritings = kanaWritings;
		this.romajiWritings = romajiWritings;
		this.meanings = meanings;
	}

	getKanjiWritings() {
		return this.kanjiWritings;
	}

	getKanaWritings() {
		return this.kanaWritings;
	}

	getRomajiWritings() {
		return this.romajiWritings;
	}

	getMeanings() {
		return this.meanings;
	}
}