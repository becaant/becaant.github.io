// Display a welcome message when the page loads
window.addEventListener('load', () => {
    console.log("Welcome to my portfolio!");
});

// Example: A function to alert the user when they click on a project (optional)
// document.querySelectorAll('.project').forEach(project => {
//     project.addEventListener('click', () => {
//         alert("Project details will be added soon!");
//     });
// });

// Show the button when scrolling down
window.onscroll = function () {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
