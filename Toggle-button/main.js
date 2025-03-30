const body = document.querySelector("body");

const btn = document.querySelector(".btn");

const icon = document.querySelector("i");

// function afin de sauvegarder la preference de l'utilisateur dans le local storage
function savePreference(value){
    localStorage.setItem("dark-mode", value);
}

// function pour recuperer la preference de l'utilisateur
function getPreference(){
    const darkmode = localStorage.getItem("dark-mode");

    if (!darkmode) {
        savePreference(false);
        icon.classList.add("fa-sun");
    } else if(darkmode == "true") {
        body.classList.add("dark-mode");
        icon.classList.add("fa-moon");
    }else if(darkmode == "false") {
        icon.classList.add("fa-sun");
    }
}
getPreference();

btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    icon.classList.add("animated");

    // si le mode sombre est activé, on sauvegarde la preference de l'utilisateur
    savePreference(body.classList.contains("dark-mode"));

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
