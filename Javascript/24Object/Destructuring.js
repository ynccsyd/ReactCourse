/*
 Destructuring bir obje veya bir array içinden her bir 
 elemanın alınıp bir değişken içine kaydedilmesi. */

//  Destructuring bir fonksiyonun bir objeyi parametre olarak alması sırasında çok kullanışlıdır. 
//  Yani fonksiyona parametre girerken de destructuring yapabiliriz;
const cikarma = ( { sayi1, sayi2 } ) => { 
    // Bu satira dikkat
    ﻿return sayi1 - sayi2;
    }
    const sayilar = {
     sayi2: 3,
     sayi1: 5
    }
    cikarma(sayilar); 
    // sonuc 2