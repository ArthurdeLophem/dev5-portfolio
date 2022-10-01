import Card from "./card.js";

// 🔥🔥🔥 TODO 1 - make sure to export the class, if you want to be able to import the class elsewhere
export default class Bingo {
    constructor() {
        // the constructor is called when you create a new instance of the class
        console.log("Welcome to Bingo! 🎉");

        // an array including 25 cards (5x5)
        this.cards = [
            "Already made a website",
            "Already worked before they started studying",
            "Already designed a logo",
            "Doesn't live with their parents",
            "Doesn't have a Discord account",
            "Has to commute more than 1 hour to school",
            "Is a vegetarian",
            "Can play the guitar",
            "Has already visited the US of A",
            "Is older than 25",
            "Owns a goldfish",
            "Is afraid of snakes",
            "Speaks 3 different languages",
            "Has never been to a festival before",
            "Knows what CSS is",
            "Is a Marvel Comics fan",
            "Knows all the ingredients for a mojito",
            "Has a student job",
            "Plays a team sport",
            "Knows how to play chess",
            "Is a DJ",
            "Likes cilantro",
            "Is afraid of heights",
            "Loves heavy metal music",
            "Is famous on Instagram"
        ];

        // we start by rendering the cards to the screen
        this.renderCards();

        // then we load the saved bingo cards from localstorage to mark them as done
        Bingo.load();
    };

    renderCards() {
        // this function renders the cards to the screen
        console.log("rendering cards");

        // 🔥🔥🔥 TODO 2
        let key = 0;
        let newKey;
        let card;
        this.cards.forEach(aCard => {
            let newKey = key + 1;
            //let newCard = `<div class="bingo__card" data-number="${newKey}" id="bingo__card${newKey}">${card}</div>`
            card = new Card(aCard, newKey);
            key = newKey;
            card.render(newKey);
        });
    };

    static checkWinner() {
        // a static function can be called without creating an instance of the class
        // 🔥🔥🔥 TODO 6
        // count all cards that are marked as done (select done items and count them with .length)
        let bingoBoard = document.querySelector(".bingo__board");
        console.log("Checking for a winner");
        let cardsDone = bingoBoard.querySelectorAll(".bingo__card--done").length
        if (cardsDone === 5) {
            bingoBoard.style.display = "none";
            document.querySelector(".bingo__overlay").style.visibility = "visible";
        }

    };

    static save() {
        // 🔥🔥🔥 TODO 7
        // save the cards that are done to localstorage
        // you can simply save an array with the card numbers like [1, 6, 8]
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        let cardsWon = [];
        console.log("Saving bingo to localstorage");
        // let cards = document.querySelectorAll(".bingo__card--done");

        // if there are not done cards, remove localstorage
        // if (cards.length === 0) {
        // remove localstorage
        // }

        // save a selection like [1, 7, 8] to localstorage item "bingo"
        // you might want to check out how JSON.stringify() works
    };

    static load() {
        // 🔥🔥🔥 TODO 8
        // load the cards that are done from localstorage
        // this works the other way around of the save function
        // load the saved string from localstorage and parse it as an array, then loop over it
        console.log("loading bingo selection from localstorage");

        // check if localstorage item exists
        if (localStorage.getItem("bingo")) {
            // let cardsWon = JSON.parse();
            // JSON.parse() will convert the string [1, 7, 8] back to an array which you can loop
            // loop over the numbers 1, 7, 8 and mark those cards as done by adding the right CSS class
            // .bingo__card--done
        }
    };
}
