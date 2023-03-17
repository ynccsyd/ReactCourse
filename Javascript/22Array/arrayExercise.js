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
console. log(allUsers) // ['Ayse', 'Hulya', 'Merve', 'Ahmet', 'Hasan', 'Mehmet']

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console. log(allUsers.toString()) //Ayse,Hulya,Merve,Ahmet,Hasan,Mehmet
console. log(allUsers.join(" --- ")) // Ayse --- Hulya --- Merve --- Ahmet --- Hasan --- Mehmet

//-Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melissa")
allUsers.splice(Math.floor( allUsers.length /2 ), 0, "Lorem")
console. log(allUsers) // (8) ['Ayse', 'Hulya', 'Merve', 'Lorem', 'Ahmet', 'Hasan', 'Melissa', 'Mehmet']


// Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.
const alisverisListem = ["elma", "ekmek", "süt"];
const elmaVar = alisverisListem.includes("elma");
console.log(elmaVar); //true
// Dizi içerisinde elma olduğu için true yazdırmasını bekleriz.

const armutVar = alisverisListem.includes("armut");
console.log(armutVar); // false

//.concat() dizileri birleştirip tek bir diziye çevirmemizi sağlıyor.
const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];
const menu = yiyecekler.concat(icecekler);
console.log(menu); // ['pasta', 'baklava', 'puding', 'su', 'kahve']
 
// forEach
//  dizi.forEach(function(diziElemanınınKendisi, diziElemanınınIndeksi, dizininKendisi) {
//     // Bir şeyler yap.
//     }); 

 // Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir kod yazalım:
const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
}); 
// çıktı :
// yumurta 0
//  un 1
//  süt 2

/*.map() */
//Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular 
//fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.
// Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:
const sayilarim = [1,2,3];
let sayilarin5kati = sayilarim.map(function(sayi) {
    return sayi*5;
});
console.log(sayilarin5kati);
console.log(sayilarim);

/* .some() */
const sayilar2 = [4,5,6];
// sonucu görebilmek çıktıyı sonuc adlı değişkende tutalım:
const sonuc1 = sayilar2.some(function(sayi) {
    return sayi > 5 ;
});
console.log(sonuc1);
// Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.
const sonuc2 = sayilar2.some(function(sayi) {
    return sayi <3;
});

console.log(sonuc2);
// Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz. 

// .filter()
// filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
// Yeni oluşacak diziyi bir değişkende saklıyoruz.
// Orijinal dizi bozulmuyor.


const sayilar1 = [1,2,3,4,5];

const filtrelenmisSayilar = sayilar1.filter(function(sayi) {
    return sayi >3;
});

console.log(filtrelenmisSayilar);
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

console.log(sayilar1);
// Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.


// .find()
// Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
// Diğer metotların aksine find metodu elemanın kendisini döner.
// Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
// Koşulu sağlayan bir eleman bulamazsa undefined döner.
// Örneğin:

const sayilar = [4,5,6,7];

const bulunacakEleman1 = sayilar.find(function(sayi) {
    return sayi === 5;
});
console.log(bulunacakEleman1);
// Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.


const bulunacakEleman2 = sayilar.find(function(sayi) {
    return sayi > 5;
});
console.log(bulunacakEleman2);
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.


const bulunacakEleman3 = sayilar.find(function(sayi) {
    return sayi < 3;
});
console.log(bulunacakEleman3);
// Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.

// .sort()
// Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
// Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)
// Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
// Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.
// Örneğin:
// Varsayılan haliyle (parametre vermeden) sıralamak yapmak istediğimizde:
const sayilar3 = [3,5,2,10,4];

sayilar.sort();
console.log(sayilar3);
// Çıktı olarak [10, 2, 3, 4, 5] alırız. 
//(Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)
const sayilar4 = [3,5,2,10,4];

sayilar.sort(function(a,b) {
    return b-a;
});
console.log(sayilar4);
// Çıktı olarak [10, 5, 4, 3, 2] alırız.


// .reduce()
// Bu metot dizimizi yalnızca bir değere indirger.
// Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
// Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
// Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.
// Örnekler:

const sayilarr= [10,20,30];

// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici (akumulator, sayi) {
    return akumulator + sayi;
}

// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonucbir = sayilarr.reduce(indirgeyici,0);

console.log(sonucbir);
//0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.
// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:
const sonuciki = sayilar.reduce(indirgeyici, 5);

console.log(sonuciki);
// 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.