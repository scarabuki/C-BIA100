const learnButton = document.getElementById("learnButton");

learnButton.addEventListener("click", function() {
document.getElementById("about").scrollIntoView({
behavior: "smooth"
});
});
