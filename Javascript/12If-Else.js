//*********** Kosullarla Calismak ***********
// if(kosul) {
//     // Bu kod satırı çalışacaktır.
// } 

// else // tek satırlık kodu buraya yazabilirsin. 

// let username = prompt("Kullanici Adiniz Giriniz:")
// // eger kullanici bilgisi varsa ekrana ismini yazdir
// // eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// // if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}
// if (username) { // if kismi her zaman true ise calisir
//     console.log(` Kullanici Bilginiz ${username}`)
// } else
//     console.log("bilgi yok")

    //Ortalama hesaplama
    // var ogrVizeNot = prompt("Vize Notunuzu Giriniz:")
    // var ogrFinalNot = prompt("Vize Notunuzu Giriniz:")
    // var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);
    
    // if(ogrOrtalama > 0 && ogrOrtalama < 30) {
    //   console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
    // }
    
    // else if(ogrOrtalama > 31 && ogrOrtalama < 49) {
    //   console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
    // }
    
    // else if(ogrOrtalama > 50 && ogrOrtalama < 84) {
    //   console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
    // }
    
    // else if(ogrOrtalama > 85 && ogrOrtalama <= 100) {
    //   console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
    // }

    //// Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulmayı deneyelim.


// //Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır

// var randomSayi = Math.floor(Math.random() * 10);
// var tahmin=document.getElementById("random").value;

// function findrandom(randomSayi, tahmin) {

//     if (tahmin == randomSayi && tahmin != null) alert("Bildin!!!");
//     else if (tahmin == "") alert("Boş giriş yaptınız!");
//     else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
//     else {
//         alert("Bir daha denee :(, Random sayi: " + randomSayi);
//     }

// }

var weight=prompt("Kilonuzu giriniz:")
var height=prompt("Boyunuzu giriniz:")


function vkiHesapla(weight, height) {
    var vki = weight / (height * height)
    //vki = kg/(m * m)
//metre cinsinden örnek 1.66 
    if (vki < 18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
    if (vki >= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
    if (vki >= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
    if (vki >= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
    return alert("Girdiğiniz değerleri kontrol ediniz");
};

vkiHesapla(weight,height)
