import Kanji from '@/model/Kanji';
import Configuration from '@/model/Config'
export default class KanjiAPI {
	static getEndPoint() {
		return Configuration.backend_domain + "/dictionnary/kanji/";
	}

	/**
	* Searches a kanji specified by a given query
	* @param query The searched kanji
	* @param accessToken the access token of the user
	*/
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