import questions from './questions.js';

// Shuffling function to randomize question order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array; // Return the shuffled array
}

// Function to shuffle the questions array with a delay
function shuffleArrayWithDelay(array, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            shuffleArray(array);
            resolve(array);
        }, delay);
    });
}

// Variable to keep track of the current question index
let currentQuestionIndex = 0;

// Variable to keep track of the number of strikes
let strikes = 0;

// Variable to keep track of the number of correct answers
let correctAnswers = 0;

// Function to update the strikes display
function updateStrikesDisplay() {
    $('.strikes').text('Strikes: ' + strikes);
}

// Function to update the correct answers display
function updateCorrectAnswersDisplay() {
    $('.correctQuestions').text('Correct Questions: ' + correctAnswers);
}

// Function to shuffle the questions array and display the current question
async function resetGame() {
    await shuffleArrayWithDelay(questions, 3000);
    currentQuestionIndex = 0;
    strikes = 0;
    correctAnswers = 0;
    displayCurrentQuestion();
}

// Function to display the current question with buttons
async function displayCurrentQuestion() {
    const $questionsContainer = $('.questions');

    // Check if all questions have been answered
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];

        // Display the question
        let questionHTML = '<div class="question">' +
            '<p>' + currentQuestion.question + '</p>' +
            '<ul class="choices">';

        // Loop through choices and add list items
        for (let i = 0; i < currentQuestion.choices.length; i++) {
            questionHTML += '<li><button class="choice" data-choice="' + currentQuestion.choices[i] + '">' + currentQuestion.choices[i] + '</button></li>';
        }

        questionHTML += '</ul></div>';
        $questionsContainer.empty().append(questionHTML);
    } else {
        // All questions have been answered, reset the game or show a completion message
        $questionsContainer.text('You are truely a scholar! You answered all questions.');

        // Shuffle the questions array again for the next round, only if the game ended due to strikes
        if (strikes >= 3) {
            await resetGame(); // Use await to ensure resetGame completes before moving on
            return;
        }
    }

    // Update the strikes display
    updateStrikesDisplay();
    // Update the correct answers display
    updateCorrectAnswersDisplay();
}

// Function to check the answer and proceed to the next question
function checkAnswer() {
    const selectedChoice = $(this).data('choice'); // Use data attribute to store the choice value
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.correctAnswer) {
        // Correct answer, increment correctAnswers count
        correctAnswers++;
    } else {
        // Incorrect answer, increment strikes
        strikes++;

        // Check if the game should reset
        if (strikes >= 3) {
            // Increment strikes before updating the display
            updateStrikesDisplay();

            // Reset the game
            $('.questions').text('Game Over! You reached 3 strikes. Go read your Bible!');
            currentQuestionIndex = 0;
            strikes = 0;
            correctAnswers = 0; // Reset correctAnswers count
            resetGame(); // Call the resetGame function instead of using setTimeout
            return;
        }
    }

    // Update the strikes display
    updateStrikesDisplay();

    // Proceed to the next question
    currentQuestionIndex++;
    // Update displays
    displayCurrentQuestion();
}

// Call the displayCurrentQuestion function when the document is ready
$(document).ready(function () {
    // Shuffle the questions array to randomize question order
    shuffleArray(questions);

    // Display the first question
    displayCurrentQuestion();

    // Attach a click event to buttons to check the answer
    // Adjust the selector according to your HTML structure
    $('.questions').on('click', '.choice', checkAnswer);
});


