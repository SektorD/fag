<<<<<<< HEAD
function clickCube() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);
    var deg = getRandomInt(360);

    console.log("#clickCube", red, green, blue, deg);

    var stringBoxShadow = "0 0 5px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 25px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 50px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 75px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 100px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 200px rgb(" + red + "," + green + " ," + blue + ")";

    document.getElementById("cube").style.backgroundColor = "rgb(" + red + "," + green + " ," + blue + ")";
    document.getElementById("cube").style.boxShadow = stringBoxShadow;
    document.getElementById("container").style.transform = "rotate(" + deg + "deg)";

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
=======
function clickCube() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);
    var deg = getRandomInt(360);

    console.log("#clickCube", red, green, blue, deg);

    var stringBoxShadow = "0 0 5px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 25px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 50px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 75px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 100px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 200px rgb(" + red + "," + green + " ," + blue + ")";

    document.getElementById("cube").style.backgroundColor = "rgb(" + red + "," + green + " ," + blue + ")";
    document.getElementById("cube").style.boxShadow = stringBoxShadow;
    document.getElementById("container").style.transform = "rotate(" + deg + "deg)";

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
>>>>>>> 74bda0a48889042b7bfb9fe26b5a0614c6cf1afb
