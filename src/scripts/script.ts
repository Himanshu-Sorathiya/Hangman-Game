/**
 * The image element that displays the current hangman illustration.
 * @type {HTMLImageElement}
 */
const hangmanImage = document.querySelector(
  ".hangman-image-wrapper img",
)! as HTMLImageElement;

/**
 * The container element for displaying the underscores representing the answer.
 * @type {HTMLDivElement}
 */
const answerArea = document.querySelector(".answer-area")! as HTMLDivElement;

/**
 * The container element for displaying the riddle or puzzle.
 * @type {HTMLDivElement}
 */
const riddleArea = document.querySelector(".riddle")! as HTMLDivElement;

/**
 * The container element for the on-screen keyboard.
 * @type {HTMLDivElement}
 */
const keyboardArea = document.querySelector(
  ".keyboard-area",
)! as HTMLDivElement;

/**
 * The span element that displays the count of wrong guesses.
 * @type {HTMLSpanElement}
 */
const wrongGuessCounter = document.querySelector(
  ".counter",
)! as HTMLSpanElement;

/**
 * The overlay container that displays the victory or lose screen.
 * @type {HTMLDivElement}
 */
const overlay = document.querySelector(".overlay")! as HTMLDivElement;

/**
 * The buttons inside the overlay for restarting the game.
 * @type {NodeListOf<HTMLButtonElement>}
 */
const playAgainButtons = document.querySelectorAll(".overlay .btn");

/**
 * The number of correct guesses made by the player.
 * @type {number}
 */
let correctGuess: number;

/**
 * The number of wrong guesses made by the player.
 * @type {number}
 */
let wrongGuess: number;

/**
 * The index of the currently selected riddle from the riddles array.
 * @type {number}
 */
let randomIndex: number;

/**
 * The current riddle text to be displayed.
 * @type {string}
 */
let riddle: string;

/**
 * The current answer text to be guessed by the player.
 * @type {string}
 */
let answer: string;

/**
 * Initializes the game by selecting a random riddle, resetting counters,
 * updating the display with underscores, and showing the riddle.
 */
function initialization(): void {
  randomIndex = Math.trunc(Math.random() * riddles.length);

  riddle = riddles[randomIndex].riddle;
  answer = riddles[randomIndex].answer.toUpperCase();

  correctGuess = 0;
  wrongGuess = 0;
  wrongGuessCounter.textContent = String(wrongGuess);
  hangmanImage.src = `../assets/images/hangman-${wrongGuess}.svg`;

  answerArea.innerHTML = "";
  Array.from({ length: answer.length }, () => {
    const span = document.createElement("span");
    span.textContent = "_";
    answerArea.appendChild(span);
  });

  riddleArea.innerHTML = "";
  riddleArea.textContent = riddle;
}
window.addEventListener("DOMContentLoaded", initialization);

/**
 * Displays the victory or lose overlay based on the result.
 * @param {boolean} isVictory - Determines if the overlay should show victory or lose screen.
 */
function showOverlay(isVictory: boolean): void {
  const result = isVictory
    ? overlay.firstElementChild!
    : overlay.lastElementChild!;

  overlay.classList.remove("hidden");
  overlay.classList.add("flex");

  result.classList.remove("hidden");
  result.classList.add("flex");

  result.querySelector(".answer")!.textContent = answer;
}

/**
 * Handles the key press event by updating the display with correct or incorrect guesses.
 * Updates the hangman image based on the number of wrong guesses.
 * @param {string} key - The key pressed by the user.
 */
function handleKeyPress(key: string): void {
  const spans = document.querySelectorAll(".answer-area span")!;

  if (answer.includes(key)) {
    spans.forEach((span, idx) => {
      if (answer[idx] === key) {
        span.textContent = key;
        correctGuess++;
      }
    });

    if (correctGuess === spans.length) {
      showOverlay(true);
    }
  } else {
    wrongGuessCounter.textContent = String(++wrongGuess);
    hangmanImage.src = `../assets/images/hangman-${wrongGuess}.svg`;

    if (wrongGuess === 6) {
      showOverlay(false);
    }
  }
}

/**
 * Handles click events on the keyboard area, disabling the clicked button
 * and processing the key press.
 * @param {Event} e - The click event object.
 */
keyboardArea.addEventListener("click", function (e: Event) {
  const key = (e.target as HTMLSpanElement).closest(
    ".char-button",
  )! as HTMLButtonElement;

  if (!key) return;

  key.setAttribute("disabled", "true");

  handleKeyPress(key.textContent!);
});

/**
 * Resets the game state by re-initializing the game, enabling all keyboard buttons,
 * hiding the overlay, and resetting overlay content.
 */
function resetGame() {
  initialization();

  const keyboardButtons =
    document.querySelectorAll<HTMLButtonElement>(".char-button")!;
  keyboardButtons.forEach((btn) => {
    btn.disabled = false;
  });

  overlay.classList.remove("flex");
  overlay.classList.add("hidden");

  overlay.firstElementChild!.classList.remove("flex");
  overlay.lastElementChild!.classList.remove("flex");
  overlay.firstElementChild!.classList.add("hidden");
  overlay.lastElementChild!.classList.add("hidden");

  overlay.firstElementChild!.querySelector(".answer")!.textContent = "answer";
  overlay.lastElementChild!.querySelector(".answer")!.textContent = "answer";
}

/**
 * Adds event listeners to the play again buttons to reset the game when clicked.
 */
playAgainButtons.forEach((button) => {
  button.addEventListener("click", resetGame);
});
