/*
 Destructuring bir obje veya bir array içinden her bir 
 elemanın alınıp bir değişken içine kaydedilmesi. */

//  Destructuring bir fonksiyonun bir objeyi parametre olarak alması sırasında çok kullanışlıdır. 
//  Yani fonksiyona parametre girerken de destructuring yapabiliriz;
const cikarma = ({ sayi1, sayi2 }) => {
    // Bu satira dikkat
    return sayi1 - sayi2;
}
const sayilar = {
    sayi2: 3,
    sayi1: 5
}
cikarma(sayilar); // sonuc 2

const toplama = ({ sayi1, sayi2, ...args }) => {
    let sonuc = sayi1 + sayi2;
    for (let sayi in args){
     sonuc += args[sayi];
    }
    return sonuc;
   }
   const sayilarim = {
    sayi1: 8,
    sayi2: 4,
    sayi3: 7,
    sayi4: 9,
    sayi5: 11
   }
   toplama(sayilarim); 
   // 39 doner

   /*for (let sayi in args) satiri der ki args içindeki tüm property'lerin key'lerini dön bana.
    Bu döngüdeki sayi değişken her bir property için bize sayi3 , sayi4, sayi5 string anahtarını döner.
    Ama biz anahtar değil de değerleri almak istersek args[sayi] yazabiliriz.*/

let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;
console.log(foo) // Selin

var house2 = {};
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
 // Nesneler yinelenebilir (iterable) değildir elemanlarını dizi olarak yazmak için;
 const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
} // Uncaught TypeError: car is not iterable

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
} //Output;
// red
// orange
// yellow

/*Object.keys(), Object.values(), and Object.entries().*/
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]

/**Make a loop */
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}
//how to access an object's member using the brackets notation. 
function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();