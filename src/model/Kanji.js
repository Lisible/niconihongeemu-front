export default class Kanji {
	constructor(literal, readings, meanings, romaji, strokeCount, jlptLevel) {
		this.literal = literal;
		this.readings = readings;
		this.romaji = romaji;
		this.meanings = meanings;
		this.strokeCount = strokeCount;
		this.jlptLevel = jlptLevel;
	}

	getLiteral() {
		return this.literal;
	}

	getReadings() {
		return this.readings;
	}

	getRomaji() {
		return this.romaji;
	}

	getMeanings() {
		return this.meanings;
	}

	getStrokeCount() {
		return this.strokeCount;
	}

	getJLPTLevel() {
		return this.jlptLevel;
	}
}