//key ve value farklı veri tiplerinde olabileceği gibi bir fonksiyonu da işaret edebilir. 
//Bir özellik eğer bir fonksiyonu işaret ediyorsa bu özelliğe metot denir.

// Object icinde metot nasil ekleriz
let user = {
    firstName: "Bilgin",
    lastName: "Uzman",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function () {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`

    }
}
console.log(user.shortName()) // B. Uzman

//Yukarıdaki gibi, metot tanımlanırken function() anahtar kelimesi kullanılarak yapılabileceği
// gibi EcmaScript6'nın arrow function yönteminin söz diziminden yararlanarak yapmak da mümkündür. 
//Fakat arrow functionlar this erişimine sahip değildir.

var person1 = {
    name: 'Rumeysa',
    surname: 'Turgut',
    age: 23,
    introduce: () => {
        return `My name is ${person1.name} ${person1.surname}, I'm ${person1.age} yo.`;
    },
};
console.log(person1.introduce()) //My name is Rumeysa Turgut, I'm 23 yo.
// metod ekleyelim
person1.myCity = function () {
    console.log(`I live in ${this.city}`);
};
// console.log(person1.myCity());
const fonksiyonAdi = () => {
    console.log("Merhaba Kodluyoruz")
}
console.log(fonksiyonAdi.name);// "fonksiyonAdi
//
function Insan(isim, yas) {
    this.isim = isim;
    this.yas = yas;
}
const ali = new Insan("ali", 21);
console.log(ali.yas);// 21

ali.yeniOzellik = "Sonradan eklenmiş bir özellik";
console.log(ali.yeniOzellik); // "Sonradan eklenmiş bir özellik"
console.log(ali)
// ÇIKTI:
//Insan {
//     isim: 'ali', 
//     yas: 21,
//     yeniOzellik: 'Sonradan eklenmiş bir özellik'
// }


// Sınıfa prototype yardımıyla fonksiyon eklemek
Insan.prototype.yeniFonksiyon = () => {console.log("Merhaba Kodluyoruz")}
const ayse = new Insan("ayşe",22);
ayse.yeniFonksiyon();
// Output : "Merhaba Kodluyoruz"
//Objeye prototype yardımıyla fonksiyon eklemek :

ayse.__proto__.enYeniFonksiyon = () => {console.log("Tekrar Merhaba Kodluyoruz!")}
ayse.enYeniFonksiyon();
// Output : "Tekrar Merhaba Kodluyoruz!"


//SAMPLE
var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) =&gt; `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
	return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));//Merhaba, ben Ali Veli, 32 yaşındayım