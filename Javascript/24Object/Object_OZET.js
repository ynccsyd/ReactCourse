/** Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
* Key / value şeklinde property'leri saklar.
* Key ifadesi string veya sembol olmalıdır.
* Value ifadesi herhangi bir değer alabilir.
* Belli bir property'e erişmek için kullanabileceklerimiz: 
  * Dot notation: obj.property 
  * Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.

Bu zamana kadar bahsettiğimiz objeler “plain object” olarak isimlendirilir. */

/*Obje Metodları
Plain objects için aşağıdaki metotlar(method) kullanılabilir:*/

// Object.keys(obj) // Key’lerden oluşan bir array döner(return).
// Object.values(obj) //Value’lardan oluşan bir array döner.
// Object.entries(obj) // [key, value] çiftlerinden oluşan bir array döner. 
// //Tüm bu Object.* metotları array veri tipinde değer döner.

// let person = {
//     name: "Jack",
//     age: 20
// };

// Object.keys(person) = ["name", "age"]
// Object.values(person) = ["Jack", 20]
// Object.entries(person) = [["name", "Jack"], ["age", 20]]

/*JSON Metodları
Objenizi String veri türüne çevirip, projenizde objelerinizi direk sayfaya basmak isterseniz, onun içinde bir metot bulunmakta.*/
let person1 = {
    name: "Jack",
    age: 20
};

document.getElementById("demo").innerHTML = JSON.stringify(person1); // Bu objenizi bir stringe çevirip demo idsine basacaktır.

let stringObject = JSON.stringify(person1);

let newPerson = JSON.parse(stringObject);
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir 