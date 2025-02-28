document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Load theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeIcon.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeIcon.textContent = "☀️"; // Sun icon for light mode
        } else {
            localStorage.setItem("theme", "light");
            themeIcon.textContent = "🌙"; // Moon icon for dark mode
        }
    });
});
