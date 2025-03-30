const body = document.querySelector("body");

const btn = document.querySelector(".btn");

const icon = document.querySelector("i");

btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    icon.classList.add("animated");

    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    setTimeout(() => {
        icon.classList.remove("animated");
    }, 500);
});
