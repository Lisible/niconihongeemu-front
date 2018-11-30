export default class Kanji {
	constructor(literal, readings, meanings, strokeCount, jlptLevel) {
		this.literal = literal;
		this.readings = readings;
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