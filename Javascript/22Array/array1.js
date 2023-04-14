// Array olusturmak
let domain = "kodluyoruz"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] // bos liste
// Array içerisindeki eleman/öge sayısını öğrenmek
console.log(
    items.length    // array icimdeki oge sayisi
)

// document.queryselector('#into').innerhtml= items.length

// Array icindeki ilk elemanin cagirilmasi
console.log(items[0])
// Array icindeki son elemanin cagirilmasi
console.log(
    "sondaki dizi elemanı:",
    items[items.length - 1])
// Array icindeki ortadaki elemanin cagirilmasi
console.log(
    "ortadaki dizi elemanı:",
    items[Math.floor(items.length/2)]
)
// değişken içindeki bilginin Array olup olmadığının kontrol edilmesi
console.log(
    typeof (items) // object olarak çıktı veriyor
)
console.log(
    Array.isArray(items)
)

// hangileri isArray => True verir?
console.log("[]:", Array.isArray([]))
console.log("1:", Array.isArray(1))
console.log("true:", Array.isArray(true))

/**Samples */
var greet = "Hello, ";
var place = "World"

"Wo".concat("rl").concat("d"); // 'World'

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

/*** */var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

/****/
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 5}

car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}

/*** */
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
} 
// 100
// 200
// red

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);
// { mileage: 98765, color: 'red' }
// { mileage: 98765, color: 'red', turnTheKey: [Function (anonymous)] }

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
// Output
// { mileage: 98765, color: 'red' }
// {
//   mileage: 98765,
//   color: 'red',
//   turnTheKey: [Function (anonymous)],
//   lightsOn: [Function (anonymous)]
// }
// The engine is running
// The lights are on.