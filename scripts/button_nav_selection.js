/*
    This script handles the navigation selection between the main content buttons.
*/

const ContentNames =
    [
        "projects",
        "career",
        "skills",
        "research"
    ];

const TextAreaMinHeightExtended = "200px";
const TextAreaMinHeightClosed = "0px";
const TransitionDuration = 500;

// Get references to the buttons
const careerButton = document.getElementById('career-Button');
const skillsButton = document.getElementById('skills-Button');

// Get references to the data areas
const dataSelectionArea = document.getElementById('data_selection_area');
const projectDataArea = document.getElementById('project_data_area');

// Function to show a specific data area and hide the other
function showDataArea(areaToShow) {
    dataSelectionArea.style.opacity = 0;
    projectDataArea.style.opacity = 0;
    areaToShow.style.opacity = 1;
}

// Event listeners for button clicks
careerButton.addEventListener('click', () => {
    showDataArea(dataSelectionArea);
});

skillsButton.addEventListener('click', () => {
    showDataArea(projectDataArea);
});

// --- Rest of your existing code ---

// This section is for the other buttons (projects, research, etc.)
// It's the same as the code I originally provided, so I'm not including it here
// to avoid redundancy.  You'll need to copy this part from your previous
// code.