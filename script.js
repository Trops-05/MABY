// Questions for your MABY
const questions = [
    {
        question: "1. Wha your first impression of me? 🥹",
        answers: [
            "He's kind 💗",
            "He's funny 😂",
            "He's shy 🙈",
            "Still figuring him out 🌷"
        ]
    },

    {
        question: "2. Do you enjoy talking with me? 💌",
        answers: [
            "Yes, of course! 💕",
            "Sometimes hehe 🙈",
            "I want to talk more! 🥰",
            "Not really 😅"
        ]
    },

    {
        question: "3. Do I ever make you smile? 😊",
        answers: [
            "Yes! 💗",
            "Sometimes 🥹",
            "Maybe hehe 🙈",
            "Not yet 😂"
        ]
    },

    {
        question: "4. Would you like to know me better? 🌷",
        answers: [
            "Yes, definitely! 💖",
            "Let's see what happens 🥰",
            "Maybe, slowly 💕",
            "I'm not sure yet 🌸"
        ]
    },

    {
        question: "5. Can I tell you something honestly? 💌",
        answers: [
            "Yes, tell me! ❤️",
            "I'm listening 🥹",
            "Now I'm curious! 🙈",
            "Okay, go ahead 🌷"
        ]
    }
];

let currentQuestion = 0;
let responses = [];

// Get HTML elements
const welcomeScreen = document.getElementById("welcome");
const quizScreen = document.getElementById("quiz");
const confessionScreen = document.getElementById("confession");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const progressElement = document.getElementById("progress");
const feedbackElement = document.getElementById("feedback");

// Start the quiz
document.getElementById("startBtn").addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
});

// Display the current question
function showQuestion() {
    const item = questions[currentQuestion];

    progressElement.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionElement.textContent = item.question;
    feedbackElement.textContent = "";
    answersElement.innerHTML = "";

    item.answers.forEach(answer => {
        const button = document.createElement("button");

        button.textContent = answer;

        button.addEventListener("click", () => {
            saveAnswer(answer);
        });

        answersElement.appendChild(button);
    });
}

// Save the selected answer
function saveAnswer(answer) {
    responses.push({
        question: questions[currentQuestion].question,
        answer: answer
    });

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        quizScreen.classList.add("hidden");
        confessionScreen.classList.remove("hidden");

        // Responses remain in this browser session.
        console.log("Her answers:", responses);
    }
}

// Final confession responses
const finalMessage = document.getElementById("finalMessage");

document.getElementById("yesBtn").addEventListener("click", () => {
    finalMessage.textContent =
        "Awww! 🥹💗 Thank you for giving me a chance. " +
        "Let's get to know each other one step at a time! ❤️";

    hideFinalButtons();
});

document.getElementById("timeBtn").addEventListener("click", () => {
    finalMessage.textContent =
        "That's okay. 🌷 Take your time. " +
        "I respect your feelings, and there's no pressure. 💗";

    hideFinalButtons();
});

document.getElementById("friendBtn").addEventListener("click", () => {
    finalMessage.textContent =
        "Thank you for being honest with me. 💕 " +
        "I respect your feelings and value you as a person.";

    hideFinalButtons();
});

function hideFinalButtons() {
    document.getElementById("yesBtn").classList.add("hidden");
    document.getElementById("timeBtn").classList.add("hidden");
    document.getElementById("friendBtn").classList.add("hidden");
}

// Create floating hearts
const heartContainer = document.getElementById("hearts");
const heartSymbols = ["💗", "💕", "♡", "❤️", "🌸"];

for (let i = 0; i < 22; i++) {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = heartSymbols[
        Math.floor(Math.random() * heartSymbols.length)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 7) + "s";
    heart.style.animationDelay = (-Math.random() * 10) + "s";

    heartContainer.appendChild(heart);
}