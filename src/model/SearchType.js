export default {
	SearchType: Object.freeze({
					ANY: 1,
					WORD: 2,
					KANJI: 3
				}),

	searchTypeFromString: function(str) {
		if(typeof str !== 'string')
			throw { id: 'invalid_search_type' };

		if(str === 'any') return this.SearchType.ANY;
		else if(str === 'word') return this.SearchType.WORD;
		else if(str === 'kanji') return this.SearchType.KANJI;
		else throw { id: 'invalid_search_type' };
	}
}