var startButton = document.getElementById("startButton");
var submitButton = document.querySelector("button.submitButton");
var secondsLeft = (questions.length * 30 + 1);
var timerElement = document.getElementById("timer");
var submitScore = document.querySelector("#submit-score");
var userScoreElement = document.getElementById(userScore);
var userNameInput;
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var questionNumber = -1;
var answer;

function startTimer() {
    document.getElementById("home").classList.add('d-none');
    document.getElementById("quiz").classList.remove('d-none');

    setTimer();
    makeQuestions();
}

function setTimer() {
    var countdown = setInterval(function (){
        secondsLeft--;
        timerElement.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
            setTimeout(displayScore, 500);
        }
    }, 1000);
}

function makeQuestions(){
    questionNumber++;
    answer = questions[questionNumber].answer

    questionHead.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";

    var choices = questions[questionNumber].choices;

    for (var q = 0; q < choices.length; q++) {
        var nextChoice = document.createElement("button");

        nextChoice.textcontent = choices[q]
        answerButton = answerChoices.appendChild(nextChoice).setAttribute("class","P3 M1 button buttonLight buttonBlock");
    }

}

function displayScore() {
    document.getElementById("quiz").classList.add('d-none');
    document.getElementById("submitScore").classList.remove('d-none');
    userScoreElement.textContnet = "FINAL SCORE: " + secondsLeft + ".";
}


startButton.addEventListener("click", startTimer);
submitButton.addEventListener("click", function (event){
    event.stopPropagation();
    addScore();
    window.location.href = './highscores.html'
});

function addScore () {
    userNameInput = document.getElementById("userName").value

    var newScore = {
        name: userNameInput,
        score: secondsLeft,
    };

    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    highScores.push(newScore)
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function showFeedback() {
    var pElement = document.getElementsByClassName("feedback")[0]
    pElement.removeAttribute('style');
}

function hideFeedback() {
    var pElement = document.getElementsByClassName("feedback")[0]
    pElement.style.display="none"
}

answerChoices.addEventListener("click", function (event){
    var pElement = document.getElementsByClassName("feedback")[0]

    if (answer === event.target.textContent) {
        pElement.innerHTML = "YES";
        setTimeout(hideFeedback,2000);
        showFeedback();
    } else {
        pElement.innerHTML = "INCORRECT";
        setTimeout(hideFeedback,2000);
        secondsLeft = secondsLeft - 30;
        showFeedback();
    }
    makeQuestions();
    }
);