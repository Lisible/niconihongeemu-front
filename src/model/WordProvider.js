import Word from '@/model/Word';

const ENDPOINT = 'http://localhost:3000/dictionnary/word/';

export default class WordProvider {
	constructor(){
		this.endpoint = ENDPOINT;
	}

	searchWord(query, accessToken) {
		return fetch(this.endpoint + query + "?access_token=" + accessToken)
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