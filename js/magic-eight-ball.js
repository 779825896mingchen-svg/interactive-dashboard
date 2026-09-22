// 1. Array of possible answers (at least 6)
const answers = [
    "It is certain.",
    "Without a doubt.",
    "Yes — definitely.",
    "Reply hazy, try again.",
    "Don't count on it.",
    "My sources say no.",
    "Outlook not so good.",
    "Most likely."
];

// 2. displayAnswer() — picks a random answer and shows it in #circle
function displayAnswer() {
    const index = Math.floor(Math.random() * answers.length);
    const circle = document.getElementById("circle");
    circle.innerHTML = answers[index];
    circle.style.display = "flex"; // show it (CSS uses flex for centering)
}

// 3. mousedown listener on the ball image
const ball = document.getElementById("ball");
ball.addEventListener("mousedown", function () {
    const question = document.getElementById("question").value.trim();

    if (question === "") {
        alert("Please enter a yes/no question first!");
    } else {
        displayAnswer();
    }
});

// 4. click listener on reset button hides the circle
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function () {
    document.getElementById("circle").style.display = "none";
});