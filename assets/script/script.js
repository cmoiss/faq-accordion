const iconsScope = document.querySelectorAll(".interaction-icons");
const plusIcon = document.querySelectorAll(".icon-plus");
const minusIcon = document.querySelectorAll(".icon-minus");
const contents = document.querySelectorAll(".content");

iconsScope.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        // Changes the visibility of the content
        contents[index].classList.toggle("hidden");

        // Changes the visibility of the icons
        plusIcon[index].classList.toggle("hidden");
        minusIcon[index].classList.toggle("hidden");
    });
});
