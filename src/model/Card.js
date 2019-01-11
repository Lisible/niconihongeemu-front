export default class Card {
    constructor(id, front, back) {
        this.id = id;
        this.front = front;
        this.back = back;
    }

    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
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