//-array map kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/map


const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]
// userName icinde orjinal isim kalsin,
// // short Name icinde ilkharf buy uk . (A.)
// // new Name icinde ilkharf buy uk olsun
// {userName: "AYSE", shortName: "A.", new Name: "Ayse") yazdırmak için:

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

const USERS_OBJ = USERS.map(item => {
    return {
        userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).
            toLowerCase()}`

    }

}
)
console.log(USERS_OBJ)

// YA DA
const USERS_OBJ1 = USERS.map(item => (
    {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).
        toLowerCase()}`}
    )
)
console.log(USERS_OBJ1)



// SAMPLEs
let meyveler = ["Kivi", "Muz"];

console.log(meyveler.length); // 2

//Dizideki Elemana Ulaşma

var ilkMeyve = meyveler[0];// Kivi
var sonMeyve = meyveler[meyveler.length - 1];
// /* Diziler sıfır-tabanlı olduğu için uzunluk-1'inci eleman son elemandır.
// Öncelikle Array Map metodunun kullanımına bir göz atalım.

array.map( function(value, index, array), this)
// array : Üzerinde işlem yapılacak olan diziyi belirtir. Bu dizinin her bir elemanı map metotunun içinde belirleyeceğimiz işleme tabi tutulacaktır.
// value : Üzerinde işlem yapılan dizi değerini belirtir.
// array : Üzerinde işlem yapılan diziye erişimi sağlar
// this : Kullanımı zorunlu değildir(opsiyoneldir). this değişkenine iletilecek olan değeri belirtir.
// Örnekler
// Örnek 1: Bir dizinin tüm elemanlarını 2 ile çarpan fonksiyon;

const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => {
    return deger * 2
})

console.log(sayilar);//[2, 3, 4, 5, 10]
console.log(yeniArray);//[4, 6, 8, 10, 20]

//Örnek 2: Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun.
// Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.

const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map((e)=>{
    if(e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});

console.log( yeniMaaslar ); //[1210, 13650, 2750, 4725, 1650.0000000000002, 26250, 2200]

/** */
[0,10,20,30,40,50].map( function(num) {
    return num / 10
}) //Output: [0,1,2,3,4,5]