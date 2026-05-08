# Interactive Messaging System - Week 1

## Description 
This project implements an interactive system built with JavaScript designed to request user data (name and age), validate the input, and display personalized messages based on the age provided. It serves as a fundamental exercise to reinforce core JavaScript programming concepts.

## Objective
To implement a functional program that enables user interaction by validating data and applying conditional logic to generate dynamic responses.

### Reinforced Skills
- Variable declaration (`let` and `const`).
- JavaScript data type management.
- Use of interaction functions: `console.log()`, `alert()`, `prompt()`, and `console.error()`.
- Conditional structures (`if`, `else if`, `else`).
- Best practices for variable naming (camelCase and descriptive naming).

## Structure 
The project consists of the following files:

| File | Description |
| :--- | :--- |
| `index.html` | Basic HTML document structure that loads the script. |
| `interactive_system.js` | Main program logic (input, validation, and output). |

## How to Run 
1. Clone this repository to your local machine.
2. Open the `index.html` file in your preferred web browser.
3. The system will prompt for your name and age using pop-up windows (`prompt`).
4. Check the browser console (F12) to see error messages or confirmations.

## Technical Details 
The program follows this workflow:
1. **Input:** Requests the user's name and age.
2. **Validation:** Verifies if the age is a number and if it is greater than or equal to 0.
   - If the input is invalid, an error is logged to the console.
3. **Conditionals:**
   - **Under 18:** Displays an encouraging message to keep learning.
   - **18 or older:** Displays a welcome message regarding professional opportunities.

---
## Author
**Leonardo Ayala**