export default class Card {
    constructor() {
        this.front = 'Card front';
        this.back = 'Card back';
    }

    getFront() {
        return this.front;
    }
    setFront(front) {
        this.front = front;
    }

    getBack() {
        return this.front;
    }
    setBack(back) {
        this.back = back;
    }
}