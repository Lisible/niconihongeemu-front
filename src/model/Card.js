export default class Card {
    constructor(id, front, back, nextRevisionDate, streak) {
        this.id = id;
        this.front = front;
        this.back = back;
        this.nextRevisionDate = nextRevisionDate;
        this.streak = streak;
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

    getNextRevisionDate() {
        return this.nextRevisionDate;
    }
    setNextRevisionDate(nextRevisionDate) {
        this.nextRevisionDate = nextRevisionDate;
    }

    getStreak() {
        return this.streak;
    }
    setStreak(streak) {
        this.streak = streak;
    }
}