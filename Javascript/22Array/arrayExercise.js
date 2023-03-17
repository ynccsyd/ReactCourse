let items = [1, 2, 3, 4, 5]
// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Herve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]
items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)
console. log(items.length)
console.log(items [0]. length) // Array icindeki istedigimiz Array ' in length bilgisini aldik
console.log(items[0] [0]) // Ayse bilgisine elastic :)

// Array icerisinden oge ayirmak => splice(pos, item?)
let newItems = items.splice(1, 4) // 1 den başla 4 item al
console.log("newItems: ", newItems)
console.log("items: ", items)
// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')