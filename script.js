// Highlights the nav link of the section currently on screen.
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                links.forEach((link) => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + entry.target.id
                    );
                });
            }
        });
    },
    { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    alert("IT WORKS!");
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}
