let choicesEl = document.querySelector("#choices");
let questionTitle = document.querySelector("#question-title");
let startScreen = document.querySelector("#start-screen");
let endScreen = document.querySelector("#end-screen");
let questionPrompts = document.querySelector("#questions");
let finalScore = document.querySelector("#final-score");
let initials = document.querySelector("#initials");
let submit = document.querySelector("#submit");
let feedback = document.querySelector("#feedback");


let questions = [
    { question: "what kind of animal are you?", answers: ["potato", "mammal", "fish", "dinosaur"], correctAnswer: 3 },
    { question: "what is the last thing you ate?", answers: ["breakfast", "lunch", "dinner", "junk"], correctAnswer: 1 },
    { question: "do you understand JavaScript?", answers: ["I've had better luck stapling scrambled eggs to the ceiling", "i am pretending i do to impress my peers", "of course i do my brain is a filofax", "not even remotely, pal"], correctAnswer: 0 }
];

let currentQuestion= 0;

questionTitle.textContent= questions[currentQuestion].question


choicesEl.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        //event.target.getAttribute("data-index")
    localStorage.setItem("choicesEl", choicesEl);
    }
});

//need to link these questions up with html so that when the user clicks the button, these questions come up. 