let formDom= document.querySelector("#useform")
formDom.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault() // default işlemi engelledik
    console.log("işlem gerçekleşti.")
}