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
