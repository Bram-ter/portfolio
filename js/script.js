var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");

var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
var modal6 = document.getElementById("modal6");

function btnClick1() {
    modal1.classList.add("block");
}
function btnClick2() {
    modal2.classList.add("block");
}
function btnClick3() {
    modal3.classList.add("block");
}
function btnClick4() {
    modal4.classList.add("block");
}
function btnClick5() {
    modal5.classList.add("block");
}
function btnClick6() {
    modal6.classList.add("block");
}

btn1.addEventListener("click", btnClick1);
btn2.addEventListener("click", btnClick2);
btn3.addEventListener("click", btnClick3);
btn4.addEventListener("click", btnClick4);
btn5.addEventListener("click", btnClick5);
btn6.addEventListener("click", btnClick6);

var cross1 = document.querySelector("body main #modal1 .cross");
var cross2 = document.querySelector("body main #modal2 .cross");
var cross3 = document.querySelector("body main #modal3 .cross");
var cross4 = document.querySelector("body main #modal4 .cross");
var cross5 = document.querySelector("body main #modal5 .cross");
var cross6 = document.querySelector("body main #modal6 .cross");

var modal1 = document.querySelector("#modal1");
var modal2 = document.querySelector("#modal2");
var modal3 = document.querySelector("#modal3");
var modal4 = document.querySelector("#modal4");
var modal5 = document.querySelector("#modal5");
var modal6 = document.querySelector("#modal6");

function crossClick1() {
    if ( modal1.classList.contains("block") ) {
        modal1.classList.remove("block");
    }
}

function crossClick2() {
    if ( modal2.classList.contains("block") ) {
        modal2.classList.remove("block");
    }
}

function crossClick3() {
    if ( modal3.classList.contains("block") ) {
        modal3.classList.remove("block");
    }
}

function crossClick4() {
    if ( modal4.classList.contains("block") ) {
        modal4.classList.remove("block");
    }
}

function crossClick5() {
    if ( modal5.classList.contains("block") ) {
        modal5.classList.remove("block");
    }
}

function crossClick6() {
    if ( modal6.classList.contains("block") ) {
        modal6.classList.remove("block");
    }
}

cross1.addEventListener("click", crossClick1);
cross2.addEventListener("click", crossClick2);
cross3.addEventListener("click", crossClick3);
cross4.addEventListener("click", crossClick4);
cross5.addEventListener("click", crossClick5);
cross6.addEventListener("click", crossClick6);


