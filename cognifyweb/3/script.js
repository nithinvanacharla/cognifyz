const button= document.getElementById("colorButton");

const colors = ["#b52424", "#92a18d", "#8d78cc", "#5c426e", "#9BF6FF", "#A0C4FF", "#BDB2FF", "#FFC6FF"];

button.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});


button.addEventListener("click", () =>{
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor=randomColor;
})