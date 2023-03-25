// [key1:1, key1:2, key3:3,
let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2,
    modelName: "Hackbook Pro",
    model_name: "Hackbook Pro",
}
console.log(laptop1)
// Dogru Anahtar Bilgisi Olusturmak
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])

// Anahtar bilgisine yeni deger eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac 1"
console.log(laptop1)

// Yeni Bilgi Eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

//Anahtar Bilgilerine Ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

//Deger Bilgilerine Ulasmak (values) -> Object.values(item)
console.log(
    Object.values(laptop1)
)
let values = Object.values(laptop1)

values.forEach(value => {
    console. log("value: ", value)
})

// Samples
let person= {};                     // set (oluştur)
person["likes sea"] = true;         // get (getir)
console.log(person["likes sea"]);   // true (doğru)
delete person["likes sea"];         // delete (sil)

//Köşeli parantezli yazım aynı zamanda property name getirmede kullanılabilir:
let animal= {};           // set
let key = "flies";        // key atama
animal[key] = true;       // value atama

//
let person1 = {
    name: "Jack",
    age: 20,
  };
  let key1 = prompt("Kişinin hangi özelliğini öğrenmek isterdiniz?", "name");
  
  // değişken ile erişim
  alert(person1[key1]);      // Jack (prompt’a “name” yazarsak erişeceğimiz değer)


//Computed properties, objedeki hangi property'nin güncelleneceğini dinamik olarak seçmemize olanak tanır.
function objectify (key, value) {
    return {
 [key]: value
   }
 }
 objectify("name", "Anna");   //  {name: "Anna"} atanmış yeni değer


 /* KEY VALUE */
 let state = {
	users:[
		{name: "Brock", age: 25, favoriteColor: "red"},
		{name: "Jessie", age: 17, favoriteColor: "yellow"},
		{name: "James", age: 41, favoriteColor: "blue"},
		{name: "Winnie", age: 18, favoriteColor: "purple"}
	],
	settings:{
		version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
	},
	banList: ["Ash", "Angelica", "Tom", "Jerry"]
}
//"banList" propertysinde 3. elemana ulaşmak istersek
alert(state.banList[2])
//"settings"lerdeki "website" değerine ulaşmak istersek 
alert(state.settings.website)
//"user"larda James'in en sevdiği rengi öğrenmek istersek, o veriye şu şekilde ulaşabiliriz.
alert(state.users[2].favoriteColor) //blue
