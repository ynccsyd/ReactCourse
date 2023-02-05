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