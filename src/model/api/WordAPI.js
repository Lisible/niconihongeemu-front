import Word from '@/model/Word';
import Configuration from '@/model/Config'

export default class WordAPI {
	static getEndPoint() {
		return Configuration.backend_domain + "/dictionnary/word/";
	}

	/**
	* Searches a word specified by a given query
	* @param query The searched word
	* @param accessToken the access token of the user
	* @return The definitions associated to the word
	*/
	static searchWord(query, accessToken) {
		return fetch(this.getEndPoint() + query + "?access_token=" + accessToken)
		.then(results => results.json())
		.then(results => {
			let words = []
			
			results.forEach(function(r){
				words.push(new Word(r.kanjiWritings, r.kanaWritings, r.romajiWritings, r.definitions));
			});

			return words;
		});
	}
}