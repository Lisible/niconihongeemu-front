const ENDPOINT = 'http://localhost:3000/dictionnary/word/';

export class WordProvider {
	constructor(){
		this.endpoint = ENDPOINT;
	}

	searchWord(query) {
		fetch(this.endpoint + query)
		.then(results => results.json())
		.then(results => {
			console.log(results);
		});
	}
}