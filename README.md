# Bubble-Game Readme

## Introduction

Welcome to the Bubble Game! This interactive web-based game was created using HTML, CSS, and JavaScript. The objective of the game is to pop bubbles that contain random numbers, with the goal of matching the number inside the bubble to the hit counter. Successfully matching a number will increase your score by ten points. You have a total of 60 seconds to play the game, and your final score will be displayed at the end.

## Game Features

- **Bubbles**: The game features multiple bubbles, each containing a random number.

- **Counters**:
  - **Hit Counter**: This counter keeps track of the number you need to match inside the bubbles.
  - **Score Counter**: Your score increases by ten points every time you successfully match a number.
  - **Time Counter**: The game runs for a total of 60 seconds. You must try to match as many bubbles as possible within this time frame.

## Project Structure

The project is structured as follows:

- **HTML**: The game's structure is defined using HTML. It sets up the layout and elements required for the game.

- **CSS**: CSS is used to provide styling and design to the HTML elements. It enhances the visual appeal of the game.

- **JavaScript Functions**:
  - `makeBubble()`: This function is responsible for creating the bubbles with random numbers inside them.

  - `clock()`: The clock function manages the game's timer, running the game for a total of 60 seconds.

  - `Hit()`: This function generates a new hit element every time a successful match is encountered.

  - `incScore()`: Whenever you hit a correct bubble, this function increases your score by ten points.

  - **Event Listeners**: Event listeners are used to detect whether a correct bubble is hit or not, facilitating interaction with the game.

## How to Play

1. Open the game in your web browser.
2. Wait for the bubbles to appear on the screen.
3. Observe the hit counter to see the number you need to match.
4. Click on a bubble with a number inside that matches the hit counter.
5. Your score will increase by ten points for each correct match.
6. Continue popping bubbles and matching numbers within the 60-second time frame.
7. Once the timer reaches zero, your final score will be displayed.

## Dependencies

This game doesn't require any external libraries or dependencies. You can play it directly in your web browser.

## Support and Feedback

If you encounter any issues or have feedback on the game, please feel free to [contact the developer](sayan.practice@com).

Enjoy playing the Bubble Game!
