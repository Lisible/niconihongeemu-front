import Kanji from '@/model/Kanji';

const ENDPOINT = 'http://localhost:3000/dictionnary/kanji/';

export default class KanjiProvider {
	constructor(){
		this.endpoint = ENDPOINT;
	}

	searchKanji(query) {
		return fetch(this.endpoint + query)
		.then(results => results.json())
		.then(results => {
			let kanjis = []
			
			results.forEach(function(r){
				kanjis.push(new Kanji(r.literal, r.readings, r.meanings, r.strokeCount, r.jlptLevel));
			});

			return kanjis;
		});
	}
}