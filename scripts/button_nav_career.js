/*
    This script handles the content assignment of career data
*/

function LoadSubCategory(category) {
    const projectArea = document.getElementById('project_data_area');

    // Applique une classe de fond spécifique pour chaque catégorie
    projectArea.className = 'container kd-selection-content';
    if (category === 'weapons') {
        projectArea.classList.add('weapons-background');
        projectArea.innerHTML = `<h2>Weapons</h2><p>Contenu spécifique pour les armes.</p>`;
    } else if (category === 'physics') {
        projectArea.classList.add('physics-background');
        projectArea.innerHTML = `<h2>Physics</h2><p>Contenu spécifique pour la physique.</p>`;
    }

    // Affiche la zone de données du projet
    projectArea.style.opacity = 1;
}


function LoadCareer(button, index) {
    // Définir l'état des boutons pour Past Works et Skills
    document.getElementById('education-Button').classList.toggle('btn-career-5-active', index === 0);
    document.getElementById('work-Button').classList.toggle('btn-career-5-active', index === 1);

    // Si "Past Works" est sélectionné, afficher les sous-catégories
    if (index === 0) {
        document.getElementById('subcategories').style.display = 'flex';
        document.getElementById('data_selection_area').style.opacity = 0;
        document.getElementById('project_data_area').style.opacity = 0;
    } else {
        // Masquer les sous-catégories si "Skills" est sélectionné
        document.getElementById('subcategories').style.display = 'none';
        document.getElementById('data_selection_area').style.opacity = 1;
        document.getElementById('project_data_area').style.opacity = 1;
    }
}


function LoadSubCategory(subCategory) {
    careerTextArea.classList.remove("weapons-background");
    if (subCategory === "weapons") {
        careerTextArea.classList.add("weapons-background");
        careerTextArea.innerHTML = `
            <h2>Weapons</h2>
            <p>This section contains information about weapons.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aLND1_Rx4BQ" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
        `;
    } else if (subCategory === "physics") {
        careerTextArea.innerHTML = `
            <h2>Physics</h2>
            <p>This section contains information about physics-related projects.</p>
            <!-- Ajoute ici le contenu que tu veux pour la catégorie "Physics" -->
        `;
    }
    careerTextArea.style.opacity = 1;
}
