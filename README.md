# DiceGame
The website implements a simple two-player dice game. Each time the page is refreshed, the JavaScript code generates random numbers between 1 and 6 (representing the roll of a dice) for both players and displays their scores. Then, it compares the scores to determine the winner and displays the result.

The HTML provides the structure and content of the page, with different elements like headings, paragraphs, and the result display. The CSS styles the page elements, like setting the width, margin, padding, and border for each player's score display.

The JavaScript code uses the DOM (Document Object Model) to interact with the HTML elements and implements the game logic. The code uses the Math.random() method to generate random numbers between 0 and 1 and multiplies it by 6, then adds 1 to get a number between 1 and 6. The Math.floor() method is used to round down to the nearest integer. The code also updates the content of the HTML elements using the innerHTML property to display the scores and the result.

Each time the page is refreshed, the game will be played again with new random dice rolls.
