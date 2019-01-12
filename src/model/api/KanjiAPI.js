import Kanji from '@/model/Kanji';
import Configuration from '@/model/Config'
export default class KanjiAPI {
	static getEndPoint() {
		return Configuration.backend_domain + "/dictionnary/kanji/";
	}

	static searchKanji(query, accessToken) {
		return fetch(this.getEndPoint() + query + "?access_token=" + accessToken)
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