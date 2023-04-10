var buttonStart = document.querySelector(".button-start");
var secondsLeft = 45;
var timeEl = document.getElementById('countdown');

//Headers
var h1El = document.getElementById("h1");
var h2El = document.getElementById("h2");
var h3El = document.getElementById("h3");


var answerEl = document.getElementById("answers");
var correctResponse;
var answerText;
var questionCount = 0;
var answerButtons;
var endTimer = false;
var saveButton;
var pEl;
var timerInterval;
var initials;
var h2Score;
var moreTime;
var initBox;
var yourScore;
var clearBtn;
var scoreLog = [];

questionAll = {
        'What is JavaScript?': ['A Markup language', 'A programming language', 'A styling language', 'A database language',1],
        'What is the purpose of use strict?': ['It ensures backward compatibility with older browsers', 'It enforces stricter rules for writing JavaScript code', 'It allows the use of deprecated syntax', 'It disables certain features of the language',1],

        'What is a closure in JavaScript?': ['A function that is called automatically when a webpage loads', 'A function that is used to retrieve data from a server', 'A function that returns another function and retains access to the variables in its parent scope', 'A function that is used to change the appearance of a webpage',2],

        'What is the purpose of the word: this, keyword in JavaScript?': ['It refers to the current function', ' It refers to the global object', 'It refers to the object that is currently executing the function', 'It refers to the object that the function is a method of',2],

        'What is an event listener in JavaScript?': ['A function that is used to retrieve data from a server', 'A function that is used to change the appearance of a webpage', 'A function that is called automatically when a webpage loads', 'A function that waits for a certain event to occur and then executes a function',3],

        'What is a callback function in JavaScript?': ['A function that is called automatically when a webpage loads', 'A function that is passed as an argument to another function and is called when a certain event occurs', ' A function that is used to change the appearance of a webpage', 'A function that is used to retrieve data from a server',1],

        'What is the difference between let and var in JavaScript?': ['There is no difference', 'let is used for global variables, whereas var is used for local variables', 'let is block-scoped, whereas var is function-scoped', 'var is block-scoped, whereas let is function-scoped',2],

        'What is the difference between == and === in JavaScript?': ['There is no difference', ' == compares values and types, whereas === compares only values', '=== compares values and types, whereas == compares only values', '== and === are interchangeable',1],

        'What is an array in JavaScript?': ['A type of loop', 'A type of function', 'A type of variable', 'A collection of values',3],

        'What is the difference between null and undefined in JavaScript?': ['There is no difference', 'Null is a type of object and undefined is a type of primitive value', 'Null means there is no value, whereas undefined means a variable has been declared but not assigned a value', 'Undefined means there is no value, whereas null means a variable has been declared but not assigned a value',2]

    };

init();
function displayOpen() {
  if (localStorage.getItem("scores") != null) {
    scoreLog = JSON.parse(localStorage.getItem("scores"));
    sortScores();
  }
  console.log(scoreLog)
  h1El.textContent = "Coding Quiz";
  h2El.textContent = "How many can you answer before time runs out?";
  buttonStart = document.createElement("button");
  buttonStart.className = 'button-start';
  buttonStart.innerHTML = "Start Quiz";
  answerEl.appendChild(buttonStart);
  startGame();
};



function startGame() {
  buttonStart.addEventListener("click", function () {
    h1El.textContent = "";
    buttonStart.remove();
    secondsLeftstart = secondsLeft;
    displayQuestion();
    countDown()
  });
}



function countDown() {

  if (answerText === correctResponse) {
    secondsLeft = secondsLeftend + moreTime;
  }

  timerInterval = setInterval(function () {
    secondsLeft--;

    if (secondsLeft >= 0 && endTimer == false) {

    }
    else {
      clearInterval(timerInterval);
      return
    }

  }, 1000);
  return
}



function displayQuestion() {
  var question = Object.keys(questionAll)[questionCount]
  var answers = questionAll[Object.keys(questionAll)[questionCount]];
  var correctArrval = answers[4];
  endTimer = false;
  timeEl.textContent = "Time: " + secondsLeft
  secondsLeftstart = secondsLeft
  String(question);
  h2El.textContent = question;

  correctResponse = answers[correctArrval];

  if (questionCount === 0) {
    for (var i = 0; i < answers.length - 1; i++) {
      answerButton = document.createElement("button");
      answerButton.className = 'button';
      answerButton.setAttribute('id', 'button' + i)
      answerButton.setAttribute('data-num', [i])
      answerButton.innerHTML = answers[i];
      answerEl.appendChild(answerButton);
    }
    selectAnswer();
  }

  else {

    for (var j = 0; j < answers.length - 1; j++) {
      btnchange = document.getElementById('button' + [j])
      btnchange.innerHTML = answers[j];
    }
  };

};


function selectAnswer() {
  answerButtons = document.querySelectorAll(".button");
  answerButtons.forEach(btn => {
    btn.addEventListener('click', function (event) {
      var answer = event.target;
      answerText = answer.innerHTML;
      checkAnswer();
    });
  });
}



function checkAnswer() {
  if (questionCount < Object.keys(questionAll).length - 1 && secondsLeft > 0) {
    questionCount++;
    secondsLeftend = secondsLeft;
    if (answerText === correctResponse) {
      moreTime = secondsLeftstart - secondsLeftend
      secondsLeft = moreTime + secondsLeftend
      correctMessage();
      displayQuestion();
    }
    else if (answerText != correctResponse) {
      wrongMessage()
      displayQuestion();
    }
  }
  else {
    if (answerText === correctResponse) {

      moreTime = secondsLeftstart - secondsLeftend
      secondsLeft = moreTime + secondsLeftend
      correctMessage();
      timeEl.textContent = "Time: " + secondsLeft;
    }
    else {
      wrongMessage();
      timeEl.textContent = "Time: " + secondsLeft;
    }
    endTimer = true
    scoreInput();
  }
}

function wrongMessage() {
  h3El.textContent = "Incorrect"
}

function correctMessage() {
  h3El.textContent = "Correct"
}

function scoreInput() {
  for (i = 0; i < answerButtons.length; i++) {
    answerButtons[i].remove();
  }

  h3El.textContent = "";

  var secondsLefttext = secondsLeft - 1
    console.log(secondsLefttext)

  h2El.textContent = "Score: " + secondsLefttext;

  pEl = document.createElement("p");
  pEl.textContent = "Create a username and press to start again"


  answerEl.appendChild(pEl);


  initBox = document.createElement("INPUT");

  initBox.setAttribute("type", "text");
  answerEl.appendChild(initBox);

  saveButton = document.createElement("button");
  saveButton.className = 'button';
  saveButton.innerHTML = "Save";

  answerEl.appendChild(saveButton);
  clearBtn = document.createElement("button");

  clearBtn.className = 'button';
//adding a clear scores button
  clearBtn.innerHTML = "Clear Scores";

  answerEl.appendChild(clearBtn);
    console.log(scoreLog)
    renderScores();
    clearScores();
    saveScore();
};


function saveScore() {

  saveButton.addEventListener("click", writeScore);

  function writeScore(event) {
    event.preventDefault();
    initials = initBox.value;
    var scoreObj = {
      id: initials,
      score: secondsLeft
    };

    if (initials != "") {

      scoreLog.push(scoreObj);
      localStorage.setItem("scores", JSON.stringify(scoreLog));
      reset();
    }
    else {
      alert("Input your username to save your score")
    };


  };


};

function sortScores() {
  if (scoreLog.length != null)
    scoreLog.sort((a, b) => b.score - a.score);
}

function renderScores() {

  h2Score = document.createElement("h2");
  h2Score.innerHTML = "High Scores!"
  answerEl.appendChild(h2Score);
  if (scoreLog.length < 9) {

    for (var i = 0; i < scoreLog.length; i++) {
      var h4Score = document.createElement("h4");
      h4Score.innerHTML = Object.values(scoreLog[i]);
      answerEl.appendChild(h4Score);
      h4Score.id = "score" + [i]
    }
  }
  else {

    for (var i = 0; i < 9; i++) {
      var h4Score = document.createElement("h4");
      h4Score.innerHTML = Object.values(scoreLog[i]);
      answerEl.appendChild(h4Score);
      h4Score.id = "score" + [i]
    }
  };

}

//clear scores
function clearScores() {
  clearBtn.addEventListener("click", clearfunction);
}


//restart function
function clearfunction() {
  if (scoreLog.length - 1 < 9) {
    for (var i = 0; i < scoreLog.length; i++) {
      var h4score = document.getElementById(String("score" + [i]));
      console.log(h4score)
      h4score.remove();
    }
  }
  else {

    for (var i = 0; i < 9; i++) {
      var h4score = document.getElementById(String("score" + [i]));
      h4score.remove();
    }
}
scoreLog = [];
localStorage.clear('scores');
}

function init() {
  displayOpen();
}


function reset() {
  h2Score.remove();
  if (scoreLog.length - 1 < 9) {
    for (var i = 0; i < scoreLog.length - 1; i++) {
      var h4score = document.getElementById(String("score" + [i]));
      h4score.remove();
    }
  }
  else {

    for (var i = 0; i < 9; i++) {
      var h4score = document.getElementById(String("score" + [i]));
      h4score.remove();
    }
  };

  pEl.remove();
  saveButton.remove();

  clearBtn.remove();
  initBox.remove();

  clearInterval(timerInterval);

  secondsLeft = 45;

  questionCount = 0;

  displayOpen();
};