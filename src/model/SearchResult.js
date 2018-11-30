export default class SearchResult {
	constructor(type, result) {
		this.type = type;
		this.result = result;
	}

	getType() {
		return this.type;
	}

	getResult() {
		return this.result;
	}
}