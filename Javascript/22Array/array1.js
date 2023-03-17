// Array olusturmak
let domain = "kodluyoruz"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] // bos liste
// Array içerisindeki eleman/öge sayısını öğrenmek
console.log(
    items.length    // array icimdeki oge sayisi
)

// document.queryselector('#into').innerhtml= items.length

// Array icindeki ilk elemanin cagirilmasi
console.log(items[0])
// Array icindeki son elemanin cagirilmasi
console.log(
    "sondaki dizi elemanı:",
    items[items.length - 1])
// Array icindeki ortadaki elemanin cagirilmasi
console.log(
    "ortadaki dizi elemanı:",
    items[Math.floor(items.length/2)]
)
// değişken içindeki bilginin Array olup olmadığının kontrol edilmesi
console.log(
    typeof (items) // object olarak çıktı veriyor
)
console.log(
    Array.isArray(items)
)

// hangileri isArray => True verir?

console.log("[]:", Array.isArray([]))
console.log("1:", Array.isArray(1))
console.log("true:", Array.isArray(true))
