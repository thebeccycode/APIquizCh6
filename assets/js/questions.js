let startButton = document.querySelector("#start");
let choices = document.querySelector("#choices")
let timer = document.querySelector("#time");
let btna1 = document.querySelector("#a1");
let btna2 = document.querySelector("#a2");
let btna3 = document.querySelector("#a3");
let feedback = document.querySelector("#feedback");

let countdown = 90;


let questionsArray = [
    {
        question1: "what animal are you?",
        answers: {
            a: "cat",
            b: "fish",
            c: "horse",
            d: "walrus"
        },
        correctAnswer: "b"
    },
    {
        question2: "how many days are in a week?",
        answers: {
            a: "4",
            b: "7",
            c: "29",
            d: "which week are we talking about?"
        },
        correctAnswer: "b"
    },
    {
        question3: "do you understand JavaScript?",
        answers: {
            a: "no",
            b: "my brain is a motherboard that someone dropped in a vat of custard",
            c: "no comment",
            d: "yes"
        },
        correctAnswer: "b"
    }
];

let currentQuestion = 0;
function printQuestionS() {
    document.querySelector("#question-title").textContent = questions[currentQuestion].question
    document.querySelector("#answer1").textContent = questions[currentQuestion].answers[0]
    document.querySelector("#answer2").textContent = questions[currentQuestion].answers[1]
    document.querySelector("#answer3").textContent = questions[currentQuestion].answers[2]
    document.querySelector("#answer4").textContent = questions[currentQuestion].answers[3]
};


startButton.addEventListener("click", function (event) {
    startQuiz()
});

function startQuiz(){
    countdownTimer = 90;
    userScore = 0;
};


// make a if statement to check if the answer is correct or not
// if the answer is correct then move to the next question
// if the answer is incorrect then subtract 10 seconds from the timer
// if the answer is incorrect then move to the next question
// if the answer is correct then move to the next question
choicesEl.addEventListener("click", function(event){
    //check if the user clicked on a button
    if(event.target.matches("button")){
        //get the index of the button
        let index = event.target.getAttribute("data-index");
        //check if the index is the correct answer
        //if(){
            //correct answer
        
            //check if we are at the end of the questions array
            //if(){
                //game over
           // } else {
                //render next question 
            //}
        //} else {
            //wrong answer
        //}
    }
}
)