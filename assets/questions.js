let question1 = [
{question: "what kind of animal are you?", answers: ["potato", "mammal", "fish", "dinosaur"], correctAnswer: 3},
];

let choicesEl = document.querySelector("#choices");

choicesEl.addEventListener("click", function(event){
if (event.target.matches("button")){
    event.target.getAttribute("data-index")
}
});

//need to link these questions up with html so that when the user clicks the button, these questions come up.