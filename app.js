let homeScore = 0
let awayScore = 0

function HomeScored(points) {
    homeScore += points;
    UpdateScore();
}

function AwayScored(points) {
    awayScore += points;
    UpdateScore();
}

function ResetScore() {
    homeScore = 0;
    awayScore = 0;
    UpdateScore();
}

function UpdateScore() {
    console.log("home score: ", homeScore, " away score: ", awayScore)
    let displayedHScore = document.getElementById("home-score-display");
    let displayedAScore = document.getElementById("away-score-display");

    displayedHScore.innerText = homeScore.toString();
    displayedAScore.innerText = awayScore.toString();

    if (Math.abs(homeScore - awayScore) >= 21) setTimeout(DisplayTimeout, 100)
}

function DisplayTimeout() {
    window.alert("It was an absolute blow out")
}

UpdateScore()