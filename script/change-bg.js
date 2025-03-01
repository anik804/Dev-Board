document.getElementById("colorBtn").onclick = function () {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.documentElement.style.backgroundColor = randomColor;
    document.body.style.backgroundColor = randomColor;
};