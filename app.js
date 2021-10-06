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


    class Die {
        constructor() {
            this.div = $("<div></div>");
            this.value = this.roll();
            this.div.addClass("die-style");
            this.div.id = divCount;
            this.div.attr("id", this.div.id);
            $(dieContainer).append(this.div);
            dieArray.push(this);
            divCount++;
        }
        roll() {
            let value = randomVal(1, 7);
            this.value = value;
            this.div.text(`${this.value}`);
        }

    };

    function randomVal(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

});


