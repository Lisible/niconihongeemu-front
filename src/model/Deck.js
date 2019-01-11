export default class Deck {
	constructor(id, name, cardList) {
		this.id = id;
		this.name = name;
		if(cardList !== undefined)
            this.cardList = cardList;
        else
            this.cardList = [];
        this.cardCount = this.cardList.length;
	}

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	getCardList() {
		return this.cardList;
	}

	getCardCount() {
		return this.cardCount;
	}

	getCardToReviseCount() {
		return this.cardList.filter(card => card.nextRevisionDate < Date.now() || card.nextRevisionDate === null).length;
	}
}