$(document).ready(function () {
    let dieArray = [];
    let divCount = 1;

    const rollDieButton = $("<button></button>");
    rollDieButton.text("Roll Die");
    $("body").append(rollDieButton);
    rollDieButton.click(function () {
        dieArray.forEach((die) => die.roll());
    });

    const dieContainer = $("<div></div>");
    $("body").append(dieContainer);
    dieContainer.addClass("die-container");

    const newDieButton = $("#newDieButton");
    newDieButton.click(() => new Die());

    const sumDieButton = $("<button></button>");
    sumDieButton.text("Add All Die");
    $("body").append(sumDieButton)
    sumDieButton.click(() => sumDice());


    class Die {
        constructor() {
            this.div = $("<div></div>");
            this.roll();
            this.div.addClass("die-style");
            this.div.id = divCount;
            this.div.attr("id", this.div.id);
            $(dieContainer).append(this.div);
            dieArray.push(this);
            console.log(dieArray)
            this.div.click(() => this.roll());
            this.div.dblclick(() => this.removeDie());
            divCount++;
        }
        roll() {
            this.value = randomVal(1, 7);
            this.div.text(`${this.value}`);
        }
        removeDie() {
            this.div.remove();
            dieArray.splice(this);
        }

    };

    function sumDice() {
        let total = dieArray.reduce(addDie, 0);
        alert(total);
    };

    let addDie = (a, b) => {
        console.log(b)
        return a + b.value;
    };

    function randomVal(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

});


