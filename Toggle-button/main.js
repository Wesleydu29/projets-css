const body = document.querySelector("body");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
});