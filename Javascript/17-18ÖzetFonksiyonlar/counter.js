// Functions Bolum Sonu Egzersizi
let counter = 0
let counterDOM = document.querySelector('#counter')
let increased = document.querySelector('#increase')
let decreased = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increased.addEventListener("click", clickEvent)
decreased.addEventListener('click', clickEvent)

function clickEvent(){
    console.log(this.id)
    this.id=="increase" ? counter+=1 : counter-=1
    counterDOM.innerHTML=counter
}

