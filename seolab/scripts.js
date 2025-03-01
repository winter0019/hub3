document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", () => {
        const body = document.body;

        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            themeToggle.textContent = "🌙 Dark Mode";
        } else {
            body.classList.add("dark-mode");
            themeToggle.textContent = "☀️ Light Mode";
        }
    });
});
