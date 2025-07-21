function toggleCV() {
    var cvSection = document.getElementById("cv-section");
    if (cvSection.style.display === "none" || cvSection.style.display === "") {
        cvSection.style.display = "block";
    } else {
        cvSection.style.display = "none";
    }
}

function togglePublications() {
    var PublicationsSection = document.getElementById("publications-section");
    if (PublicationsSection.style.display === "none" || PublicationsSection.style.display === "") {
        PublicationsSection.style.display = "block";
    } else {
        PublicationsSection.style.display = "none";
    }
}

function toggleProjects() {
    var ProjectsSection = document.getElementById("projects-section");
    if (ProjectsSection.style.display === "none" || ProjectsSection.style.display === "") {
        ProjectsSection.style.display = "block";
    } else {
        ProjectsSection.style.display = "none";
    }
}