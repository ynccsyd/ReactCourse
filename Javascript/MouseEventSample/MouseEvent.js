const button = document.querySelector("#text");
button.addEventListener('dblclick',clickFonksiyonu);

function clickFonksiyonu(){
    document.getElementById("text").innerHTML = "NEW FORM";

}