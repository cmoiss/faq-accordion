const icons = document.querySelectorAll(".interaction-icons");
const contents = document.querySelectorAll(".content");

icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        contents[index].classList.toggle("hidden");
    });
});