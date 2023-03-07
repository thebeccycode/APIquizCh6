let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
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

function printQuestions() {
    document.querySelector("#question-title").textContent = questions[currentQuestion].question
    document.querySelector("#answer1").textContent = questions[currentQuestion].answers[0]
    document.querySelector("#answer2").textContent = questions[currentQuestion].answers[1]
    document.querySelector("#answer3").textContent = questions[currentQuestion].answers[2]
    document.querySelector("#answer4").textContent = questions[currentQuestion].answers[3]
};

//when i click start quiz, the first question needs to appear

//then when the user selects the answer, depending on whether it is wrong or right, a message must pop up to say whether the user was correct or not, then the score needs to be logged in the highscores.js and html

//then the quiz needs to replace the first question with the second

//then this needs to repeat until quiz is finished

//when quiz is finished, score must be shown e.g. "2 out of 5 correct"