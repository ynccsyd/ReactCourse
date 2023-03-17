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

items.unshift(" lorem")
items.push("ipsum")
console.log( items.indexOf("ipsum")) //4

//Array Kopyalamak -> slice, […E56]
let copyItems = items
console.log(items)  // [' lorem', Array(3), 5, Array(3), 'ipsum']
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems) //[' lorem', Array(3), 5, Array(3)]
console.log("items:", items)

console.log("kopyalandiktan sonraki hali:")
copyItems = items.slice() // kopyalama yapti
copyItems.pop() // son ogeyi cikarttik
console. log("copyItems", copyItems)
console.log("items", items) // (3) [' lorem', Array(3), 5]
let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi (4) [' lorem', Array(3), 5, Array(3)]
console.log(es6Items) // (4) [' lorem', Array(3), 5, Array(3)]

// Iki Array Bilgisini Birlestirmek -> […ES6, ES6]
let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapisini birlestirmek
console. log(allUsers)
// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console. log(allUsers.toString())
console. log(allUsers.join(" --- "))

//-Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melissa")
allUsers.splice(Math.floor( allusers.length /_2 ), 8, "Lorem")
console. log(allUsers)
