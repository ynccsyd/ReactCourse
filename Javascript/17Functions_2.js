//******** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak **********
// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// // 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir
let firstName = "Lorem"
function greetings(firstName = "", lastName = "") { // default parametre aliyor…
    // console.log( Merhaba ${firstName ? firstName : ""})
    console.log(`Merhaba ${ firstName } `)
    console.log(`Merhaba ${firstName} ${lastName}`)
}
console.log(firstName) // degisken
greetings() // fonksiyona parametre gondermedik ??
greetings("Parameter")
function greetings2(firstName, lastName) {
        let info =` Merhaba ${ firstName } ${ lastName }`
    return info
}
    
let greetingsInfo = greetings2("Ad", "Soyad")
    // let info = "deneme" // ?????
    console.log(greetingsInfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${ id }`)
    domObject.innerHTML = info
}
let htmlInfo = `<span style="color:red">Color REDDDD</span>`
domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greetings2("Lorem", "Ipsum"))


//Examples
const PI = 3.14; // Formülde kullandığımız sabit sayı pi'yi bu şekilde alabiliriz.
function daireAlaniHesaplama (r) // Fonksiyonumuz, r parametresini alıyor.
{
    var islemSonucu = PI*r*r; // Dairenin alanını hesaplayacak işlemimiz.
    return islemSonucu;		 // return ifadesiyle sonucu dönüyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); // Argüman olarak, alanını hesaplamak istediğimiz herhangi bir dairenin yarıçapı için 3 rakamı verildi. 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.

//**daha kısa */
function daireAlaniHesaplama (r, PI = 3.14) 
{ 
    return PI*r*r;		
}
var donenSonuc = daireAlaniHesaplama(3); 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.

//**daha işlevsel */
function daireAlaniHesaplama (r, PI = 3.14) 
{ 
    return PI*r*r;		
}

function carpma (a1, a2)
{
    return a1*a2;
}

var alan1 = daireAlaniHesaplama(5); // 5 ve 6 argümanları için dairelerin alanları hesaplandı.
var alan2 = daireAlaniHesaplama(6); 
var donenSonuc = carpma(alan1, alan2); // Hesaplanan alanlar argüman olarak verildi.
console.log(donenSonuc);


/****Return ifadesinden sonra döndürülecek değer atlanırsa, UNDEFINED döndürülür.***/