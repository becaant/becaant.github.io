// Display a welcome message when the page loads
window.addEventListener('load', () => {
    console.log("Welcome to my portfolio!");
});

// Example: A function to alert the user when they click on a project (optional)
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        alert("Project details will be added soon!");
    });
});
