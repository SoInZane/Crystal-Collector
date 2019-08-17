$(document).ready(function() {

    // variable to generate a random number to start the game that is between 19-120
    var Random = Math.floor(Math.random()*101+19)

    // use jquery to write the random number
    $("#goal_number").text(Random);
    
    // variables to make each crystal get a random number between 1-12
    var crystal1 = Math.floor(Math.random()*11+1)
    var crystal2 = Math.floor(Math.random()*11+1)
    var crystal3 = Math.floor(Math.random()*11+1)
    var crystal4 = Math.floor(Math.random()*11+1)

    // variables to track the users score, wins and losses
    var userScore = 0;
    var wins = 0;
    var losses = 0;

// use jquery to tally wins and losses
$("#wins").text(wins);
$("#losses").text(losses);

// functiont that will reset the game and give a new random goal number and give each crystal a new random number
function reset() {
    Random = Math.floor(Math.random()*101+19)
    console.log(Random);
    $("#goal_number").text(Random);
    var crystal1 = Math.floor(Math.random()*11+1)
    var crystal2 = Math.floor(Math.random()*11+1)
    var crystal3 = Math.floor(Math.random()*11+1)
    var crystal4 = Math.floor(Math.random()*11+1)
    scoreTotal = 0;
    userScore = 0;
    $("#scoreTotal").text(userScore)
}

// function for if you win, alert that the user won, tally the win and reset the game
function win() {
    alert("Winner, Winner!");
    wins++;
    $("#wins").text(wins);
    reset();
}

// function for if you lose, alert that the user lost, tally the loss and reset the game
function lose() {
    alert("Better luck next time!");
    losses++;
    $("#losses").text(losses);
    reset();
}


// use jquery to make the crystals clickable, add the users score and then compare it to the random goal number
$("#one").on('click', function() {
    userScore = userScore + crystal1;
    $("#scoreTotal").text(userScore)
    if (userScore == Random) {
        win();
    }
    else if (userScore > Random) {
        lose();
    }
})

$("#two").on('click', function() {
    userScore = userScore + crystal2;
    $("#scoreTotal").text(userScore)
    if (userScore == Random) {
        win();
    }
    else if (userScore > Random) {
        lose();
    }
})

$("#three").on('click', function() {
    userScore = userScore + crystal3;
    $("#scoreTotal").text(userScore)
    if (userScore == Random) {
        win();
    }
    else if (userScore > Random) {
        lose();
    }
})

$("#four").on('click', function() {
    userScore = userScore + crystal4;
    $("#scoreTotal").text(userScore)
    if (userScore == Random) {
        win();
    }
    else if (userScore > Random) {
        lose();
    }
});
});

// create a game with 4 crystals that each have a random number
// every crystal needs to have a random hidden number between 1 - 12
// the goal number needs to have a random number generated at the start of each game between 19 - 120
// clicking a crystal should add its random number with the previous clicked crystals random number
// when the users total socre equals the goal number they win
// if the users total score is greater than the goal number they lose
// every win and loss should be counted and tracked
// game will reset after each win or loss
