const icons = document.querySelectorAll(".interaction-icons");
const contents = document.querySelectorAll(".content");

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        contents.forEach((content) => {
            content.classList.toggle("hidden");
        });
    });
});