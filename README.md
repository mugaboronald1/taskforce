# Interactive Photo Gallery

## Overview

This project is an interactive photo gallery built using HTML, CSS, and JavaScript. The gallery is designed to be responsive and adapts seamlessly to different screen sizes and devices. The gallery matches the provided Figma designs and includes hover interactions to display additional details about each photo.

## Features

- **Responsive Design:** Adapts to different screen sizes and devices.
- **Figma Design Accuracy:** Matches the provided Figma designs pixel-perfectly.
- **Hover Interaction:** Displays additional details when a user hovers over a photo.
- **Cross-browser Compatibility:** Consistent performance across modern web browsers, such as Chrome, Firefox, Safari, and Edge.
- **Clean Code:** Written using best practices and coding conventions for HTML, CSS, and JavaScript.

## Project Structure

Gallery/
Challenges/
├── arrayMap.js
├── stringTransform.js
├── index.html
├── CSS/
│ └── style.css
├── script.js
└── pictures/
├── fox.png
├── whale.png
├── goldenmonkey.png
└── deer.png

## Setup Instructions

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Safari, Edge)
- A code editor (e.g., VSCode, Sublime Text)

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/mugaboronald1/taskforce.git
   cd taskforce
   ```

2. **Open the project in your code editor:**

   ```sh
   code .
   ```

3. **Open `index.html` in a web browser:**
   - You can simply double-click on the `index.html` file or use the Live Server extension in VSCode.

## Usage

- **Hover over a photo** to see additional details and a "Know More" button.
- The photo will transition to grayscale when hovered over.

## Customization

- **Adding new photos:**

  - Place your photo in the `pictures/` directory.
  - Add a new `<div class="photo-item">` block in `index.html` following the existing structure.

- **Changing hover text:**
  - Update the text inside the `.learn-more` button in `index.html`.

## Coding Challenges

This repository also includes solutions to two coding challenges. The solutions are placed in the `Challenges` directory.

### Coding Challenge 1: Array Manipulation

**File:** `Challenges/arrayMap.js`

**Problem Statement:**
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

### Coding Challenge 2: String Transformation

**File:** `Challenges/stringTransform.js`

**Problem Statement:**
Given a string, transform it based on the following rules:

- If the length of the string is divisible by 3, reverse the entire string.

## License

This project is licensed under the ronald MUGABO file for details.

## Acknowledgments

- Special thanks to the COA Taskforce for the provided Figma designs and challenge.
