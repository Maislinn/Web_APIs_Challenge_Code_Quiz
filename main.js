

var titleDiv = document.getElementById("title");
var alts = document.querySelectorAll(".alts");
var resultDiv = document.querySelector("result");
var timerElement = document.querySelector("timer");
var quizElement = document.querySelector("quiz");
var startButton = document.querySelector(".start");

var score = 0;
var timerStart = 60;
var storedUser = [];


//start game function to start timer and show quiz questions
function startGame() {
    //hide start button
    startButton.classList.add("hide");
    // show start screen
    startButton.appendChild(startScreen);
    startScreen.textContent = "Get Ready!";
    startButton.style.setProperty("background-color", "red");
    startButton.style.setProperty("text-align", "center");
    var startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function(event){
        setTime();
        showQuestion();
        quizElement.classList.remove("hide");
    startTitle.style.display = "none";
    startButton.style.display = "none";
    });
};

//time countdown function
function setTime() {
    var timerInterval = setInterval(function() {
        if(!timerStart) {
            clearInterval(timerInterval);
            sendMessage("Time's Up!");
        }

    }, 1000);
}

// define the object for the questions
var questions = [
    {
        title: "What is JavaScript?",
        alternatives: ["A Markup language", "A programming language", "A styling language", "A database language"],
        answer: "1"
    },
    {
        title: "What is the purpose of 'use strict'?",
        alternatives: ["It ensures backward compatibility with older browsers", "It enforces stricter rules for writing JavaScript code", "It allows the use of deprecated syntax", "It disables certain features of the language"],
        answer: "1"
    },
    {
        title: "What is a closure in JavaScript?",
        alternatives: ["A function that is called automatically when a webpage loads", "A function that is used to retrieve data from a server", "A function that returns another function and retains access to the variables in its parent scope", "A function that is used to change the appearance of a webpage"],
        answer: "2"
    },
    {
        title: "What is the purpose of the word: this, keyword in JavaScript?",
        alternatives: ["It refers to the current function", " It refers to the global object", "It refers to the object that is currently executing the function", "It refers to the object that the function is a method of"],
        answer: "2"
    },
    {
        title: "What is an event listener in JavaScript?",
        alternatives: ["A function that is used to retrieve data from a server", "A function that is used to change the appearance of a webpage", "A function that is called automatically when a webpage loads", "A function that waits for a certain event to occur and then executes a function"],
        answer: "3"
    },
    {
        title: "What is a callback function in JavaScript?",
        alternatives: ["A function that is called automatically when a webpage loads", "A function that is passed as an argument to another function and is called when a certain event occurs", " A function that is used to change the appearance of a webpage", "A function that is used to retrieve data from a server"],
        answer: "1"
    },
    {
        title: "What is the difference between let and var in JavaScript?",
        alternatives: ["There is no difference", "let is used for global variables, whereas var is used for local variables", "let is block-scoped, whereas var is function-scoped", "var is block-scoped, whereas let is function-scoped"],
        answer: "2"
    },
    {
        title: "What is the difference between == and === in JavaScript?",
        alternatives: ["There is no difference", " == compares values and types, whereas === compares only values", "=== compares values and types, whereas == compares only values", "== and === are interchangeable"],
        answer: "1"
    },
    {
        title: "What is an array in JavaScript?",
        alternatives: ["A type of loop", "A type of function", "A type of variable", "A collection of values"],
        answer: "3"
    },
    {
        title: "What is the difference between null and undefined in JavaScript?",
        alternatives: ["There is no difference", "Null is a type of object and undefined is a type of primitive value", "Null means there is no value, whereas undefined means a variable has been declared but not assigned a value", "Undefined means there is no value, whereas null means a variable has been declared but not assigned a value"],
        answer: "2"
    }
];

var questionIndex = 0;

// function to show questions one at a time
function showQuestion() {
   titleDiv.textContent = questions[questionIndex].title;
   console.log(alts);

   alts.forEach(function(element, index) {
       element.textContent = questions[questionIndex].alternatives[index];
       element.addEventListener("click", function(event) {
        if (questions[questionIndex].answer === index) {
            resultDiv.textContent = "Correct!";
            score++;
            var nextButton = document.createElement("button");
            nextButton.textContent = "Next";
            resultDiv.appendChild(nextButton);
            //next questions
            nextButton.addEventListener("click", function(event) {
                if(questionIndex <= questions.length) {
                    nextQuestion();
                } });
            }
                else {
                    //if answer is not correct
                    resultDiv.textContent = "Wrong!";
                    timerStart -= 10;
                    if (timerStart === 0) {
                        endGame();
                    }
                }
            });
        });
    }

    //function to go to next question
    function nextQuestion() {
        score++;
        console.log(score);
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion();
            resultDiv.textContent = "";
        }
        else {
            endGame();
        }
    }

            function submitScore(){
                    var highScores = document.getElement("highScores");
                    startButton.appendChild(highScores);
                    var storedData = highScores.textContent = (storedUser + " " + score);
                    localStorage.setItem("storedData", storedData);
                    console.log(storedData);
                    quizElement.style.display = "none";
                }
   
startGame();