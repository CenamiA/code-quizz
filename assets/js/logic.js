//declaring variables

const quizzTimer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const questionsIndex = 0;

const countDown = 90;

// initialising the quizz

startBtn.addEventListener("click", function(){
startScreen.style.display = "none";
questionTitle.style.display = "block";
displayQuestions(questionsIndex);

let quizzTimer= setInterval(function(){
    timeLeft --;
    time.textContent = "remaining time" + timeLeft;

    if(timeLeft ===0){
        clearInterval(quizzTimer);
    }
}, 1000);


})

// setting up questions choices with their buttons which will be appended to the body

function radioBtn(setQuestions){
questionTitle.innerHTML = setQuestions.question;
document.body.appendChild(questionTitle);

setQuestions.choices.forEach(function(choice, index) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.name= choice;
    btn.value= choice;
});

btn.addEventListener("click", function(){
    buttonClick(choice, setQuestions.correctAnswer);
});

btn.setAttribute("style", "display: block");
document.body.appendChild(btn);
btn.appendChild(document.createTextNode(choices));

}