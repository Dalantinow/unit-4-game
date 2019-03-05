$("#crystal-one").on("click", function () {

    counter += numberOptions[0];

    $("#user-guess").text(counter);

    if (counter === targetNumber) {

        wins++;
        $("wins-text").text(wins);
        newgame();
        
    }
    else if (counter > targetNumber) {
        losses++;
        $("losses-text").text(losses);
        newgame();
    }
});

$("#crystal-two").on("click", function () {

    counter += numberOptions[1];

    $("#user-guess").text(counter);

    if (counter === targetNumber) {

        wins++;
        $("wins-text").text(wins);
        newgame();
        
    }
    else if (counter > targetNumber) {
        losses++;
        $("losses-text").text(losses);
        newgame();
    }
});

$("#crystal-three").on("click", function () {

    counter += numberOptions[2];

    $("#user-guess").text(counter);

    if (counter === targetNumber) {

        wins++;
        $("wins-text").text(wins);
        newgame();
        
    }
    else if (counter > targetNumber) {
        losses++;
        $("losses-text").text(losses);
        newgame();
    }
});

$("#crystal-four").on("click", function () {

    counter += numberOptions[3];

    $("#user-guess").text(counter);

    if (counter === targetNumber) {

        wins++;
        $("wins-text").text(wins);
        newgame();
        
    }
    else if (counter > targetNumber) {
        losses++;
        $("losses-text").text(losses);
        newgame();
    }
});
            <img id="crystal-one" src="assets/images/bluecrystal.jpg">
            <img id="crystal-two" src="assets/images/clearcrystal.jpg">
            <img id="crystal-three" src="assets/images/pinkcrystal.jpg">
            <img id="crystal-four" src="assets/images/purplecrystal.jpg">