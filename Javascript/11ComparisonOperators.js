let price =100
let user="guest"

// == Eşitse
Console.log( price ==1) //false
console. log( price ==100) // true

// === Hem değeri hem de türü eşitse
console.log(price===1); //false
console.log(price===100); //true

// != Eşit değilse
console.log(user!="guest") //false
console.log(user!="Ali") //true

// < Küçükse
console.log("price<100" , price<100)//false
// <= Küçük veya eşitse

console.log("price<=100" , price<=100)//true
// > Büyükse
console.log("price>200" , price>200)//false
// >= Büyük veya eşitse

//&& ve
price=0
console.log(price>0  && user!="guest") //false
//|| veya
console.log(price>0  || user!="guest") //true
