import Deck from '@/model/Deck';
import Card from '@/model/Card';
import Configuration from '@/model/Config'

export default class DeckAPI {
	static getEndPoint() {
		return Configuration.backend_domain + "/deck";
	}

	/**
	 * Creates a deck
	 * @param deckName The name of the deck
	 * @param accessToken The access token of the user
	 */
	static async createDeck(deckName, accessToken) {
		const response = await fetch(this.getEndPoint() + "?access_token=" + accessToken, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({name: deckName, cardList: []})
		});

		const responseData = await response.json();
		return responseData.id;
	}

	/**
	 * Imports a deck
	 * @param deckName The name of the deck
	 * @param cardList The cards of the deck
	 * @param accessToken The access token of the user
	 */
	static async importDeck(deckName, cardList, accessToken) {
		await fetch(this.getEndPoint() + "?access_token=" + accessToken, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({name: deckName, cardList: cardList})
		});
	}

	/**
	 * Returns a user's deck
	 * @param deckId The id of the user's deck
	 * @param accessToken The access token of the user
	 */
	static async getUserDeck(accessToken, deckId) {
		const response = await fetch(this.getEndPoint() + "/" + deckId + "?access_token=" + accessToken);
		const deckData = await response.json();
		const deck = new Deck(deckData.id, deckData.name, deckData.cardList);

		return deck;
	}
	/**
	 * Returns a user's decks
	 * @param accessToken The access token of the user
	 */
	static async getUserDecks(accessToken) {
		const response = await fetch(this.getEndPoint() + "?access_token=" + accessToken);
		const decksData = await response.json();
		const decks = decksData.map((deckData) => new Deck(deckData.id, deckData.name, deckData.cardList));

		return decks;
	}

	/**
	 * Deletes a deck
	 * @param accessToken The access token of the user
	 * @param deckId THe id of the deck
	 */
	static async deleteDeck(accessToken, deckId) {
		return await fetch(this.getEndPoint() + "/" + deckId + "?access_token=" + accessToken, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		});
	}

	/**
	 * Adds a card to a deck
	 * @param accessToken The access token of the user
	 * @param deckId The id of the deck
	 * @param card The card to add
	 */
	static async addCard(accessToken, deckId, card) {
		const response = await fetch(this.getEndPoint() + "/" + deckId + "/cards/?access_token=" + accessToken, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(card)
		});

		return response;
	}
	
	/**
	 * Deletes a card from a deck
	 * @param accessToken The access token of the user
	 * @param deckId The id of the deck
	 * @param cardId The id card of the card to delete
	 */
	static async deleteCard(accessToken, deckId, cardId) {
		return await fetch(this.getEndPoint() + "/" + deckId + "/cards/" + cardId +  "?access_token=" + accessToken, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		});
	}

	/**
	* Edits a given cards from a given deck
	* @param accessToken The acces token of the user
	* @param deckId the id of the deck containing to card to edit
	* @param card The card to edit
	*/
	static async editCard(accessToken, deckId, card) {
		return await fetch(this.getEndPoint() + "/" + deckId + "/cards/" + card.id + "?access_token=" + accessToken, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(card)
		});
	}

	/**
	* Retrieves the cards of a given deck
	* @param accessToken The acces token of the user
	* @param deckID the id of the deck to retrieve
	* @return The cards of the given deck
	*/
	static async getDeckCards(accessToken, deckId) {
		const response = await fetch(this.getEndPoint() + "/" + deckId + "/cards/?access_token=" + accessToken);
		const cardsData = await response.json();
		const cards = cardsData.map((cardData) => {
			return new Card(cardData.id, cardData.front, cardData.back, cardData.nextRevisionDate, cardData.streak)
		});

		return cards;
	}
}