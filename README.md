# Color Change Application 

## Overview

This application allows users to dynamically change the background color of a circular element using predefined buttons or a text input field. 
It includes functionality to reset the color to its default state.

## Features

- Change the circle's background color to red, green, or blue using buttons.
- Set a custom color via a text input field.
- Reset the circle's background color to white.

## Technologies Used

1. **HTML5:** For the structure of the page.
2. **CSS3:** For styling the page and its components.
3. **JavaScript(DOM Manipulation):** For dynamic behavior and interaction handling.

## How It Works
**1. HTML Structure**

- The circleColor div represents the circular area whose background color changes.
- Buttons (Red, Green, Blue, Reset) provide predefined color options.
- A text input field allows the user to enter custom colors in valid CSSformat    (e.g., #ff0000, rgb(0,255,0), or blue).

**2. CSS Styling**

- The circleColor div is styled to appear as a circle using the border-radius property.
- Buttons are styled for visual clarity, with distinct colors matching their functions.
- The container class centers the content on the page.

**3. JavaScript Functionality**

- Event listeners are added to the buttons and input field to detect user interaction.
- On button clicks, the backgroundColor of the circleColor div is updated to match the button’s color.
- The Reset button clears the background color and text input field.
- The input field dynamically changes the circle's color as the user types.

## Usage Instructions

1. Open the webpage.
2. Click one of the color buttons to change the circle's color.
3. Enter a custom color into the text input field to apply it to the circle.
4. Click the Reset button to clear the color and reset to the default state.

## Example
**Predefined Colors:**

- Clicking the Red button changes the circle to red.
- Clicking the Green button changes the circle to green.
- Clicking the Blue button changes the circle to blue.

**Custom Colors:**

- Enter #123456, rgb(255, 165, 0), or a named color like pink in the text input field.

**Reset:**

Clicking the Reset button restores the circle to white and clears the text input field.

## Future Enhancements

- Add more buttons for additional colors.
- Validate the custom color input to ensure valid CSS color formats.
- Add animations for smoother transitions between colors.

## Deployment
[Color-Changing-Application](https://color-change-application.netlify.app)