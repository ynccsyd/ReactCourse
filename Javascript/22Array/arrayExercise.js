let items = [1, 2, 3, 4, 5]
// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]
items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items) // [Array(3), 1, 2, 3, 4, 5, Array(3)]
console. log(items.length) // 7
console.log(items [0]. length) //(3) Array icindeki istedigimiz Array ' in length bilgisini aldik
console.log(items[0] [0]) // Ayse :)

// Array icerisinden oge ayirmak => splice(pos, item?)
let newItems = items.splice(1, 4) // 1 den başla 4 item al 
console.log("newItems: ", newItems) // (4) [1, 2, 3, 4]
console.log("items: ", items) // (3) [Array(3), 5, Array(3)]

// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')