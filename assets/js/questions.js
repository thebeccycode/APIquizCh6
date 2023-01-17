let choicesEl = document.querySelector("#choices");
let questionTitle = document.querySelector("#question-title");
let startScreen = document.querySelector("#start-screen");
let endScreen = document.querySelector("#end-screen");
let questionPrompts = document.querySelector("#questions");
let finalScore = document.querySelector("#final-score");
let initials = document.querySelector("#initials");
let submit = document.querySelector("#submit");
let feedback = document.querySelector("#feedback");


let questionsEl = [
    {
        question1: "what animal are you?",
        answers: {
            a: "cat",
            b: "fish",
            c: "horse",
            d: "walrus"
        },
        correctAnswer:"b"
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

let currentQuestion= 0;

questionTitle.textContent= questionsEl[currentQuestion].question


choicesEl.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        //event.target.getAttribute("data-index")
    localStorage.setItem("choicesEl", choicesEl);
    }
});

//oppposite of hide is active or start
//render questions to the button
// use id to put hide as a class

//startScreen.setAttribute('class', 'hide')
//questionsEl.removeAttribute('class')
