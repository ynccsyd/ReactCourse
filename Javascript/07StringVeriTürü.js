// **************** String Veri Turu Islemleri ****************
// https://www.w3schools.com/jsref/jsref_obj_string.asp
let email = " hakanyalcinkaya@gmail.com "
let firstName = "hakan"
let lastName = "YALCINKAYA"

// string karakter sayisi -> length
console.log( email.length ) // 25

// Ilk Karakteri Bulmak -> [0]:
console. log(firstName[0]) // h
console.log(firstName.charAt(0)) // h

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase()
console.log(firstName) //HAKAN

firstName=firstName.toLowerCase() 
console.log(firstName)//hakan

// // String Icinde Istedigimiz Bilgi Aramak ve Yerini Bulma -> search:
console.log(email.search("@")) //15
console.log( email[15] ) // @
email.search('olmayan') // olmayan bir dğer varsa -1 gösterir

// belli bir yere kadar al -> slice : (domain bilgisi)
let DOMAIN = email.slice( email.search("@") + 1) // gmail yazar. @ işaretinden sonrasını alır
console. log(DOMAIN)
console.log(
DOMAIN. slice(0, DOMAIN.indexOf('.') ))// sadece gmail kismini aldik

// bilgiyi degistir -> replace :
email = email.replace(' gmail.com ', ' kodluyoruz.org ');
console.log(email)

// istedigim bilgi var mi ? -> includes :
email.includes('dkfhsd') // false
email.includes('@') // true

// // istedigim bilgiler basladimi ? bitti mi -> startswith, endswith :
console.log(
    email.endsWith(' kodluyoruz.org ')
)

// Ilk Harflerini Buyuk Yapmak
firstName = "FIRST"
lastName = "LAST"
let fullName =`${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}}`

//Metin birleştirme
console.log(firstName.concat('', lastName))

//Metni diziye çevirme
var isim ="Ali, Veli"
var isimler= isim.split(',')
console.log(isimler) // ['Ali', 'Veli']

//charCodeAt – İndex Numarasına Göre Karakterin Unicode Değerini Bulma
var cisim='ağaç';
console.log(cisim.charCodeAt(1))// ğ=287

