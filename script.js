let outputScreen = document.getElementById('output-screen');
let themebg = document.body;
let themecal = document.getElementById("calc");
let themebutton = document.getElementsByClassName("buttons");
let themeequal = document.getElementsByClassName("equals");

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try{
        outputScreen.value = eval(outputScreen.value);
    }

    catch(err) {
        alert("Invalid!");
    }
}

function Clear() {
    outputScreen.value = '';
}

function del() {
    outputScreen.value = outputScreen.value.slice(0 , -1);
}

function Themechange() {
    themebg.classList.toggle("body-bg");
    themecal.classList.toggle("calculator-theme");
    outputScreen.classList.toggle("input-toggle");

    let len = themebutton.length;
    for(var i = 0 ; i<len ; i++) {
        themebutton.item(i).classList.toggle("button-toggle");
    }
    themeequal.item(0).classList.toggle("equal-toggle");
}
