import Kanji from '@/model/Kanji';

const ENDPOINT = 'http://localhost:3000/dictionnary/kanji/'; // TODO make configurable

export default class KanjiAPI {
	static searchKanji(query, accessToken) {
		return fetch(ENDPOINT + query + "?access_token=" + accessToken)
		.then(results => results.json())
		.then(results => {
			let kanjis = []
			
			results.forEach(function(r){
				kanjis.push(new Kanji(r.literal, r.readings, r.meanings, r.romaji, r.strokeCount, r.jlptLevel));
			});

			return kanjis;
		});
	}
}