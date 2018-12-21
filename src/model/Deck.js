export default class Deck {
	constructor(name, cardList) {
		this.name = name;
		if(cardList !== undefined)
            this.cardList = cardList;
        else
            this.cardList = [];
        this.cardCount = this.cardList.length;
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
}