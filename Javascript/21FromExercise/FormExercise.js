// Fromlarla çalışmak
/* 
1. Form seçimi
2. Input Bilgisini UL içerisine ekle
3. Form içindeki bilgiyi sıfırla
4. Eğer forma bilgi girilmez ise kullanıcıyı uyar
*/
let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
}

// if (USER_NAME.value && SCORE.value) {
addItem(USER_NAME.value, SCORE. value) // gonderdikten sonra sifirladik
// USER_NAME.value =
// SCORE.value =
// } else {
// console.log('hatali girls')

// const ALERT =
// <div class="alert alert-warning alert-dismissible fade show" role="alert">
// <strong>Holy guacamole!</strong> You should check in on some of those fields below.
// <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>