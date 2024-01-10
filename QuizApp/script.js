const questions = [
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        options : ["var","let","Both A and b","None of the above"],
        correctAns : 2,
    },
    {
        question:" Which of the following methods is used to access HTML elements using Javascript? ",
        options:["get Element by Id","get Element By className"," Both A and b","None of the above"],
        correctAns: 2,

    },
    {
        question:"tajamahal is situated in whic place?",
        options:["Delhi","Mumbai","lucknow","Agra"],
        correctAns:3,
    },
    {
        question:"Which of the following methods can be used to display data in some form using Javascript?",
        options:["docuement.write","console.log()"," windows.alert()","All of the above"],
        correctAns:3,
    },
    {
        question:"How can a datatype be declared to be a constant type",
        options:["let","const","var","constant"],
        correctAns:1,
    },
    {
        question:" What keyword is used to check whether a given property is valid or not? ",
        options:["in","is in"," exist","lies"],
        correctAns:0,
    },
    {
        question:" What is the use of the <noscript> tag in Javascript? ",
        options:["The contents are displayd by non-js-based browser","clear alll the cookies and catch","Both a and b","None of the above"],
        correctAns:0,
    },
    {
        question:"What does the Javascript “debugger” statement do? ",
        options:["it will debig the error program in run time"," it acts as a breakpoint in a program"," it will debug  error in current statement if any","All of the above"],
        correctAns:1.
    },
    {
        question:"What does the toLocateString() method do in JS? ",
        options:["return a localised object representation","return a parsed string","Return aa localized string representation of an object","None of the above" ],
        correctAns: 2,
    },
    {
        question:"Which function is used to serialize an object into a JSON string in Javascript? ",
        options : ["stringfy","parse()","convert()","None of the above"],
        correctAns:0,
    },
];

let currentQuestion = 0;
let score = 0;

const startBtn = document.querySelector("#start-btn");
const questionCounter = document.querySelector("#question-counter");
const scorePer =document.querySelector("#score")
const questionText = document.querySelector("#question-text");
//const option = document.querySelector(".options");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next");
const totalScore = document.getElementById("final-score");
const restart = document.getElementById("restart");
const scoreBoard = document.querySelector(".scoreboard");

const quizBoxStart = document.querySelector(".quiz-box");

console.log(scoreBoard);

startBtn.addEventListener("click",()=>{
    startBtn.parentElement.style.display = "none";
    quizBoxStart.style.display = "block";
    loadQuestion();
})

nextBtn.disabled = true;
let optionClicked = false;

options.forEach( (option,index) =>{
    option.addEventListener('click',()=> handleClick(index));
} );

 function loadQuestion(){
    if(currentQuestion<=questions.length){
        questionCounter.textContent = ` Question ${currentQuestion+1}/ ${questions.length}`
        questionText.textContent = questions[currentQuestion].question

        options.forEach((option,index)=>{
            option.textContent = questions[currentQuestion].options[index];
            option.style.backgroundColor = "white";
            option.style.pointerEvents = "auto";
            option.onclick = function(){
                handleClick(index);
            };

        } );
        nextBtn.disabled = !optionClicked;

    }else{
        showScoreCard();
    }
};


function handleClick(optionIndex){
    const correctAnsIs = questions[currentQuestion].correctAns;

    options.forEach( (option) =>{
        option.style.pointerEvents = "none"
        option.onclick = "null"
    })

    if(optionIndex === correctAnsIs){
        options[optionIndex].style.backgroundColor = "green"
        score++;
        scorePer.textContent = `Your Score is : ${score}`;
      
    }else{
        options[optionIndex].style.backgroundColor = "red";
        options[correctAnsIs].style.backgroundColor = "green"
    }
    optionClicked = true;
    nextBtn.disabled = false;
};

function showScoreCard(){
    scoreBoard.style.display = "block"
    totalScore.textContent = score;

}

nextBtn.addEventListener('click',()=>{
    currentQuestion++;
    optionClicked = false;
    nextBtn.disabled = true;
    loadQuestion();
} );

restart.addEventListener('click',()=>{
    currentQuestion = 0;
    score =0;
    scoreBoard.style.display = "none"
    scorePer.textContent = `Your Score is : ${score}`;
    optionClicked = false;
});

loadQuestion();








