var restartButton = document.querySelector("button.restartButton"),
clearButton = document.querySelector("button.clearButton"),

highScore = JSON.parse(localStorage.getItem("highScore")|| "[]"),
scoreList = document.getElementById("score-list");

highScore.sort(function (a,b) {
    return b.score -a.score
})

for (var s=0; s < highScore.length; s++) {
    var newLI = document.createElement("li")
    newLI.textContent = highScore[s].name + "-" + highScore[s].score
    scoreList.appendChild(newLi)
}

clearButton.addEventListener("click",function (){
    localStorage.clear();
    history.back();
});

restartButton.addEventListener("click",function(){
    history.back();
});