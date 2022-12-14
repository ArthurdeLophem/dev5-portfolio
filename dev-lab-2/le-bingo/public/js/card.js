import Bingo from "./bingo.js";

export default class Card {
    constructor(title, key) {
        // the constructor is called when you create a new instance of the class
        this.title = title;
        this.key = key;
        //console.log(`Created a new card with title: ${title}, keyNumber: ${key}`);
    };

    markDone(target) {
        // to mark a card as done, we add a class .bingo__card--done to it
        // š„š„š„ TODO 5: mark or unmark (toggle) a bingo card when clicked
        //console.log("Marking card as done");
        //console.log(target);
        if (target.classList.contains("bingo__card--done")) {
            target.classList.remove("bingo__card--done");
        } else {
            target.classList.add("bingo__card--done");
        }
        // hint: use class .bingo__card--done
    };

    render(counter) {
        // rendering the card to the screen is done by building up a string of HTML
        // after that, we append the HTML to the DOM - check the index.html file to see what structure to use
        //console.log("Rendering card..." + this.key);

        // š„š„š„ TODO3: build the HTML element and append it to the DOM
        //let card = `<div class="bingo__card" data-number="${this.key}" id="bingo__card${this.key}">${this.title}</div>`
        let card = document.createElement("div");
        card.dataset.number = this.key;
        card.innerHTML = this.title;
        card.setAttribute('id', `"bingo__card${this.key}"`);
        card.classList.add("bingo__card");
        let bingoBoard = document.querySelector(".bingo__board");
        bingoBoard.appendChild(card);
        //bingoBoard.innerHTML += card;



        // š„š„š„ TODO4: when we click an item, we want to check for winners and we want to save the selection to storage
        card.addEventListener("click", (e) => {
            //console.log("this is card nĀ°" + card.dataset.number)
            this.markDone(e.target);
            Bingo.checkWinner();
            Bingo.save();
        });
    };
}
