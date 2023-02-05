//Fonksiyon Parametreleri ve Gövdesi
function printHello(name){                		 //name adında bir parametre aldı
    console.log("Merhaba" + name);  	
}
printHello("Şafak");  // bir argüman vererek fonksiyonu çağırdık. Çıktı: Merhaba Şafak

function addition(sayi1,sayi2){  //>= function name and parameters
    console.log(sayi1+sayi2);     //>= body
}

//Değer Döndüren Fonksiyonlar
function addition(sayi1,sayi2){
    return (sayi1+sayi2);
}

var add = addition(1,2);   //add değişkenine 1+2 değerini fonksiyon kullanarak atadık.


// Fonksiyon Kapsamı Global/Local Değişkenler
//global değişkenleri tanımlıyoruz
var sayi1 = 5;
var sayi2 = 2;   
function addition(){
    var sayi3 = 3;           //sayi3 adında lokal bir değişken tanımlıyoruz
    return sayi1+sayi2+sayi3; //Fonksiyon içinde global ve local değişkenleri kullanıyoruz
}

function multiplication(){
    return sayi1*sayi3;  
//Burada hata alıyoruz: bunun nedeni başka bir fonksiyonun içinde tanımlı olan sayi3 lokal değişkenini kapsamı dışında 
//kullanmaya çalışmamız. sayi1 değişkeni ise global olduğundan burada kullanılabilir
}

//Callback Fonksiyonlar ve Asenkron Çalışma
////Senkron dediğimiz kavram şunu ifade etmektedir: kodumuz yukarıdan aşağı 
//doğru sırayla işlenir ve bir satırdaki işlem bitmeden bir sonraki satıra geçilmez.
//// Asenkron yapıda ise fonksiyonların birbirlerini beklemelerine gerek yoktur.
// Uzun zaman alan veya farklı görevleri olan fonksiyonlar aynı anda çalışabilir.
//***JavaScript asenkron yapıdaki bir programlama dilidir. callback ile işlem sırasına almak mümkün:
function printScreen1() {
    console.log("İlk ekran çıktısı");
  }

  function printScreen2(callback1, callback2) {
    setTimeout(function () {
      callback1();
      console.log("İkinci ekran çıktısı")
      callback2();
    }, 3000);
  }

  function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
  }


 printScreen2(printScreen1, printScreen3);

 // built-in fonksiyonları: alert(parametre) ve prompt(parametre) 
 //Fonksiyon oluşturmak için fonksiyon bildirimi yapabiliriz. Mesela;

function mesajVer() {
alert( 'Herkese Merhabalar!' );
}
//function anahtar kelimesini takiben fonksiyon ismi ve parantez içerisinde parametreler(virgülle ayrılacak şekilde) ve son olarak da süslü parantez içerisinde fonksiyonun içereceği kod(ki bu bölüme fonksiyonun gövdesi(body) denir.) sırasıyla fonksiyonu oluşturur.

function isim(parametreler) {
//...fonksiyonun gövdesi...
}
//Yukarıda bildirdiğimiz mesajVer fonksiyonu ismiyle çağrılabilir:

function mesajVer() {
alert( 'Herkese Merhabalar!' );
}
mesajVer();
mesajVer();

// Örnekler:
function mesaVer(ad, soyad) {
  alert(`Merhaba ${ad} ${soyad}`);
}

mesajVer("Arturo", "Kelesoglu", "Mr."); /* çıktı: Merhaba Arturo Kelesoglu 
//(Bu örnekte parametrelere geçilen argüman sayısı 3'tür(Arturo, Kelesoglu, Mr.). 
//Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden fazlalıklar(Mr.) önemsenmez.*/
mesajVer("Arturo"); /* çıktı: Merhaba Arturo undefined 
//(Bu örnekte parametrelere geçilen argüman sayısı 1'dir.(Arturo). 
//Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden eksiklikler undefined döner. */
mesajVer(); // çıktı Merhaba undefined undefined (Yukarıdaki örnekle aynı mantıktadır.)


//Geri Dönüş Değeri (Return Value)
//Bir fonksiyon return anahtar kelimesi kullanılarak 0 ya da 1 döndürülebilir.

function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc = topla(10,20); //  30 döner.

function carp(sayi1, sayi2) {
sayi1 * sayi2;
};

result=carp(10,20); // undefined 
//Ek olarak "topla" fonksiyonu iki değerin toplamını geri döner. 
//**"carp" fonksiyonunda ise return anahtar kelimesi kullanılmadığı için 
//geri dönüş değeri yoktur,dolayısıyla "undefined" döner.
var ekle = function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc1 = ekle(10,20); 
var sonuc2 = topla(10,20); // ***geçersiz***

//***Arrow Functions***
//Fonksiyon yaratmanın bir diğer yolu ise ES6 ile birlikte hayatımıza giren, 
//daha okunabilir daha basit bir syntax yapısına sahip olan arrow functions yapısıdır.
let func = (param1, param2, param3) => expression;
//Yukarıdaki kod bloğu basitçe, bir param1,param2,param3 parametrelerini alan ve 
//sağ taraftaki ifadeyi değerlendirip sonucunu döndüren bir fonksiyon oluşturur.
//**Aslında aşağıdaki kod bloğu ile aynı işi yapmamaktadır.
let func1 = function (param1, param2, param3) {
  return expression;
};
//Example
const carpim = (sayi1, sayi2) => sayi1 * sayi2;
/*
    // Daha uzun hali ise;
    const carpim = function(sayi1,sayi2){
      return sayi1 * sayi2;
    }
  */

console.log(carpim(3, 5));
//
const karesiniAl = (sayi) => sayi * sayi;
//***Hiç parametre olmadığı zaman ise
const helloWorld = () => console.log('Hello World');

//**Bir koşula göre iki farklı fonksiyon çalıştırmanız gerektiğini düşünün. 
//Dinamik olarak fonksiyon tanımlamayı aşağıdaki şekilde yapabiliriz.

let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

const developer =
  experience < 5
    ? () => alert('Bir cok konuyu biliyorum')
    : () => alert('Hicbir sey bilmiyorum:)');

developer();

//**Bir satıra sığabilecek basitlikte olmayan fonksiyonlarımız için 
//çok satırlı arrow function'ı şu şekilde yazabiliriz.
// parantezler bize birden fazla statement yazmamızı sağlar.
let toplam = (a, b) => {
    let result = a + b;
    return result;
  };

//***Recursion***/
//Bir fonksiyonu çağırdığımız zaman o fonksiyon bir çok fonksiyonu daha çalıştırabilir. 
//**Kısaca bir fonksiyon kendisini tekrar çağırıyor ise biz buna recursion diyoruz.

// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  alert(pow(2, 3)); // 8

  //  2.ci yol:recursion ile
  function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  alert(pow(2, 3)); // 8

  //Aşağıdaki soruyu recursion ile arrow function ve if else clause kullanarak yeniden nasıl yazarız
function pow(x, n) {
    return n == 1 ? x : x * pow(x, n - 1);
  }

 //***JavaScript function-oriented bir dil olduğundan bize bir çok özgürlük sağlar. ***
 //JavaScript de biz bir değişken atarken 3 farklı yol kullanabiliyoruz. var ve modern olanlar(let,const)
 //***Code Blocks***
//Eğer bir değişkeni bir code bloğu içerisinde tanımlarsak {...}, 
// o değişken sadece bu code block arasında ulaşılabilir olur.

//Deneyip sonuçları görebilirsiniz.
{
  let message = 'Merhaba';
  console.log(message);
}
console.log(message); // ??
//Deneyip sonuçları görebilirsiniz.
{
  let message = 'Merhaba';
  console.log(message);
}

{
  let message = 'Hello';
  console.log(message);
}
// Kod blokları kullanmadan da deneyebilirsiniz.


//If, for, while gibi döngüler de değişkenleri code block'larında tanımlar ve sadece orada ulaşılabilirler.

if (true) {
  let message = 'Merhaba';
  console.log(message);
}
console.log(message); // ? merhaba mı verir yoksa bir hata mı?
//Bir fonksiyon yazdığımızı düşünelim ve bu fonksiyon dışardan aldığı bir 
//string parametresini içerisinde 2 ye ayırsın ve bir koşula göre bize çıktı versin.

function stringFormat(str) {
  {
    let part1 = str.slice(0, 3);
    let part2 = str.slice(3);
    str = part1.toUpperCase() + part2;
  }
  //part1 ve part2 kullanılamaz.
  //bir kosula baglı return edelim. basit olması acısından sadece true yazdım.
  if (true) {
    return str;
  }
  return str.slice(4);
}

//***Nested Functions
//Nested Functions ( İç içe fonksiyonlar ) JavaScript'te yaygın olarak 
//kullandığımız bir yapı. Bir Fonksiyon içerisinde başka bir fonksiyonu 
//tanımladığımız zaman buna nested functions yapısı diyoruz aslında.

function programDetayi(bootcamp, organizasyon) {
  // nested yardımcı fonk
  const tumProgram = () => bootcamp + ' ' + organizasyon;

  console.log('Basladi, ' + tumProgram());
  consol.log('Bitti, ' + tumProgram());
}
//tumProgram fonksiyonu dış değişkene ulaşabilir ve gerekli bilgileri 
//return eder. Daha ilginç olarak da bir fonksiyon nested fonksiyonu da 
//return edebilir. Bir sayaç üzerinde bunu anlayabiliriz.

function sayacartir() {
  let sayac = 0;

  return function () {
    return sayac++;
  };
}

let counter = makeCounter();

console.log(sayacartir()); // 0
console.log(sayacartir()); // 1
console.log(sayacartir()); // 2 */