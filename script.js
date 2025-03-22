// Load projects from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    displayProjects(projects);

    // Handle form submission
    document.getElementById("project-form").addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("project-name").value;
        const description = document.getElementById("project-desc").value;
        addProject(name, description);
        this.reset(); // Clear the form
    });

    // Handle reset button click
    document.getElementById("reset-btn").addEventListener("click", function() {
        localStorage.removeItem("projects"); // Clear projects from localStorage
        displayProjects([]); // Update display with empty list
    });
});

// Function to display projects
function displayProjects(projects) {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = ""; // Clear existing content
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "col-md-4";
        projectDiv.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;
        projectList.appendChild(projectDiv);
    });
}

// Function to add a project
function addProject(name, description) {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.push({ name, description });
    localStorage.setItem("projects", JSON.stringify(projects));
    displayProjects(projects);
}