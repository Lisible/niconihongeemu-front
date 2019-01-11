const END_POINT = "http://localhost:3000/deck";

import Deck from '@/model/Deck';

export default class DeckAPI {
	static async createDeck(deckName, accessToken) {
		return await fetch(END_POINT + "?access_token=" + accessToken, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({name: deckName, cardList: []})
		});
	}

	static async getUserDeck(accessToken, deckId) {
		const response = await fetch(END_POINT + "/" + deckId + "?access_token=" + accessToken);
		const deckData = await response.json();
		const deck = new Deck(deckData.id, deckData.name, deckData.cardList);

		return deck;
	}

	static async getUserDecks(accessToken) {
		const response = await fetch(END_POINT + "?access_token=" + accessToken);
		const decksData = await response.json();
		const decks = decksData.map((deckData) => new Deck(deckData.id, deckData.name, deckData.cardList));

		return decks;
	}

	static async deleteDeck(accessToken, deckId) {
		return await fetch(END_POINT + "/" + deckId + "?access_token=" + accessToken, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		});
	}
}