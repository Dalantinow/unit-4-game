function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber = getRandomInt(19, 120);
var numberOptions = [getRandomInt(1, 12), getRandomInt(1, 12), getRandomInt(1, 12), getRandomInt(1, 12),];


function newgame(counter) {
    this.counter = 0;
};
function newone(targetNumber) {
    this.targetNumber = getRandomInt(19, 120);
};
function newtwo(numberOptions) {
    this.numberOptions = [getRandomInt(1, 12), getRandomInt(1, 12), getRandomInt(1, 12), getRandomInt(1, 12),];
};

$("#guess-total").text(targetNumber);
$("#losses-text").text(losses);
$("#wins-text").text(wins);
$("#user-guess").text(counter);


for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/bluecrystal.jpg");
    
// unsure how to call different image files for each crystal

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
};




$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#user-guess").text(counter);


    if (counter === targetNumber) {
        wins++;
        $("#wins-text").text(wins);
        newgame();
        newone();
        newtwo();
       
        
        $("#guess-total").text(targetNumber);
        $("#user-guess").text(counter);

// Can't get the crystal values to reset along with counter and target number

        console.log(numberOptions[0])
        console.log(numberOptions[1])
        console.log(numberOptions[2])
        console.log(numberOptions[3])
        console.log("________________________")
    }


    else if (counter >= targetNumber) {
        losses++;
        $("#losses-text").text(losses);
        newgame();
        newone();
        newtwo();
        $("#guess-total").text(targetNumber);
        $("#user-guess").text(counter);
        

        console.log(numberOptions[0])
        console.log(numberOptions[1])
        console.log(numberOptions[2])
        console.log(numberOptions[3])
        console.log("________________________")
    }
});


