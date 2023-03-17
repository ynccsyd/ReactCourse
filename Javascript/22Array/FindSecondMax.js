// function getSecondLargest(nums) {
//     // Complete the function
//     let result = nums
//         .sort((a, b) => a - b)
//         .filter((el, index, array) => index === array.indexOf(el))
//     return result[result.length - 2]
// }

// Uygun dizi metotlarını kullanarak  aşağıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
let dizi = [2,5,8,11,15,17];

 const buyukon=dizi.filter(function(sayi){
   return sayi>10
    
 })
const beskati=buyukon.map(function(sayi){
    return sayi*5
})
 console.log(buyukon)
 console.log(beskati)


 // Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola
// "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.
let dizi1 = [3,6,9,14,16];

// function myFunction (dizi1){
//     // Kodunuzu buraya yazın.
//     if (dizi1.some>5){
//         console.log("Beşten büyük bir eleman mevcut.")
//     }else{
//        console.log("5'ten büyük eleman mevcut değil.") 
//     }

//     }
    
// myFunction(dizi1);
const buyukbes=dizi1.some(function(sayim){
    return sayim>5
})
console.log("Beşten büyük bir eleman mevcut.",buyukbes)


// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu 
//(24) veren bir fonksiyon yazınız.:)
let dizi2 = [2,3,4];
function dizicarpim(carpim, item){
    return carpim*item
}
const carpimlar=dizi2.reduce(dizicarpim, 1)
console.log(carpimlar)