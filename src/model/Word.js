export default class Word {
	constructor(kanjiWritings, kanaWritings, meanings) {
		this.kanjiWritings = kanjiWritings;
		this.kanaWritings = kanaWritings;
		this.meanings = meanings;
	}

	getKanjiWritings() {
		return this.kanjiWritings;
	}

	getKanaWritings() {
		return this.kanaWritings;
	}

	getMeanings() {
		return this.meanings;
	}
}