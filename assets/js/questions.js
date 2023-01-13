let choicesEl = document.querySelector("#choices");
let questionTitle = document.querySelector("#question-title");

let questions = [
    { question: "what kind of animal are you?", answers: ["potato", "mammal", "fish", "dinosaur"], correctAnswer: 3 },
    { question: "what kind of animal are you?", answers: ["potato", "mammal", "fish", "dinosaur"], correctAnswer: 3 },

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