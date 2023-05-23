const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

const cross1 = document.querySelector("body main #modal1 .cross");
const cross2 = document.querySelector("body main #modal2 .cross");
const cross3 = document.querySelector("body main #modal3 .cross");
const cross4 = document.querySelector("body main #modal4 .cross");
const cross5 = document.querySelector("body main #modal5 .cross");
const cross6 = document.querySelector("body main #modal6 .cross");

const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");
const modal3 = document.querySelector("#modal3");
const modal4 = document.querySelector("#modal4");
const modal5 = document.querySelector("#modal5");
const modal6 = document.querySelector("#modal6");

/* Add block class to modal when image is clicked */
btn1.addEventListener("click", () => {
    modal1.classList.add("block");
});

btn2.addEventListener("click", () => {
    modal2.classList.add("block");
});

btn3.addEventListener("click", () => {
    modal3.classList.add("block");
});

btn3.addEventListener("click", () => {
    modal3.classList.add("block");
});

btn4.addEventListener("click", () => {
    modal4.classList.add("block");
});

btn5.addEventListener("click", () => {
    modal5.classList.add("block");
});

btn6.addEventListener("click", () => {
    modal6.classList.add("block");
});

/* Remove block class when cross is clicked */

cross1.addEventListener("click", () => {
    if ( modal1.classList.contains("block") ) {
        modal1.classList.remove("block");
    }
});

cross2.addEventListener("click", () => {
    if ( modal2.classList.contains("block") ) {
        modal2.classList.remove("block");
    }
});

cross3.addEventListener("click", () => {
    if ( modal3.classList.contains("block") ) {
        modal3.classList.remove("block");
    }
});

cross4.addEventListener("click", () => {
    if ( modal4.classList.contains("block") ) {
        modal4.classList.remove("block");
    }
});

cross5.addEventListener("click", () => {
    if ( modal5.classList.contains("block") ) {
        modal5.classList.remove("block");
    }
});

cross6.addEventListener("click", () => {
    if ( modal6.classList.contains("block") ) {
        modal6.classList.remove("block");
    }
});