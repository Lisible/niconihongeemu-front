import Card from '@/model/Card'

export default {
    name: 'deck-cards',
    data: function() {
        return {
            cards: [
                {
                    front: "Ceci est une carte !!",
                    back: "Ceci est le dos de la carte !!",
                },
                {
                    front: "Ceci est une carte !!",
                    back: "Ceci est le dos de la carte !!",
                },
                {
                    front: "Ceci est une carte !!",
                    back: "Ceci est le dos de la carte !!",
                },
                {
                    front: "Ceci est une carte !!",
                    back: "Ceci est le dos de la carte !!",
                },
                {
                    front: "Ceci est une carte !!",
                    back: "Ceci est le dos de la carte !!",
                },
            ]
        }
    },
    methods: {
        addCard: function() {
            this.cards.push(new Card());
        },
        deleteCard: function(key) {
            this.cards.splice(key, 1);
        },
        saveDeck: function() {
            this.$eventBus.$emit("ChangePerspective", "deck-dashboard");
        }
    }
}