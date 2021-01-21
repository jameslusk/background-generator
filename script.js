var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


// function that actively sets background gradient based on user input
function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

// Displays rgb of each gradient background
    css.textContent = body.style.background + ";";
}

// syntax that targets "color" var's for input events & calls setGradient function
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);