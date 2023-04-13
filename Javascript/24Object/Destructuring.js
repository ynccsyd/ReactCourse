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
