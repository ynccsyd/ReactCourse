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
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.