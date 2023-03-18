// For Dongusu
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide/
// Loops_and_iteration

// for ([başlangıçAtaması]; [koşulİfadesi]; [arttırımİfadesi]) {
// // yapilacak islam
//
let users = ["Lorem", "Ipsum", "Dolor",]
// for (let index = 0; index < 10; index++) {
// console.log(index)
// }
// let index =0
// for (; index < 10; index++) {
//     console.log(index)
// }

const userListDOM = document.querySelector('#userList')
for (index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}


//Örnek 2: 0 ve 50 sayıları arasından çift olanları konsola yazdıralım.
for (var i = 0; i < 50; i++) {
    if (i % 2 == 0) {
        console.log("çift sayılar:" ,i); // 0, 2, 4, ... 44, 46, 48
    }else if (i % 2 !== 0) {
        // console.log("tek sayılar:",i); // 1,...49
    }
};

// trim() ile karakter dizisinin başındaki ve sonundaki boşluk karakterlerini sileriz.