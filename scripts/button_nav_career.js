/*
    This script handles the content assignment of career data
*/

const CareerNames = [
    "education",
    "work",
    "weapons" // Ajout de la nouvelle catégorie
];

let CareerText = [];
let careerTextArea = document.getElementById("project_data_area");

/* Adds the included text data into the array of text. */
for (let i = 0; i < CareerNames.length; ++i) {
    CareerText.push("");
    fetch("./Data/pages/careers/" + CareerNames[i] + ".html")
        .then(r => r.text())
        .then(t => CareerText[i] = t);
}

function LoadCareer(button, btnIndex) {
    // Supprimer les classes d'arrière-plan spécifiques existantes
    careerTextArea.classList.remove("weapons-background");

    if (button.getAttribute("class") == "btn-career-5-active") {
        // Désactiver l'onglet actif s'il est re-sélectionné
        let activeButton = document.getElementsByClassName("btn-career-5-active");

        activeButton[0].className = "btn-career-5";
        careerTextArea.innerHTML = "";
        careerTextArea.style.opacity = 0;
    } else {
        // Désactiver l'onglet précédemment actif
        let activeButton = document.getElementsByClassName("btn-career-5-active");
        if (activeButton.length !== 0) {
            activeButton[0].className = "btn-career-5";
            careerTextArea.innerHTML = "";
            careerTextArea.style.opacity = 0;
        }

        // Charger le contenu en fonction de l'index
        if (btnIndex === 0) { // Pour "Past Works"
            careerTextArea.innerHTML = CareerText[0];
        } else if (btnIndex === 1) { // Pour "Skills"
            careerTextArea.innerHTML = CareerText[1];
        } else if (btnIndex === 2) { // Pour "Weapons"
            careerTextArea.classList.add("weapons-background");
            careerTextArea.innerHTML = `
                <h2>Weapons</h2>
                <p>This section contains information about weapons.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aLND1_Rx4BQ" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
            `;
        }

        // Appliquer les styles actifs et afficher le contenu
        careerTextArea.style.opacity = 1;
        document.getElementById(button.getAttribute("id")).className = "btn-career-5-active";
    }
}
