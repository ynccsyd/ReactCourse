// [key1:1, key1:2, key3:3,
let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2,
    modelName: "Hackbook Pro",
    model_name: "Hackbook Pro",
}
console.log(laptop1)
// Dogru Anahtar Bilgisi Olusturmak
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])

// Anahtar bilgisine yeni deger eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac 1"
console.log(laptop1)

// Yeni Bilgi Eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

//Anahtar Bilgilerine Ulasmak (keys) -> Object.keys(item)
keys = Object, keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

//Deger Bilgilerine Ulasmak (values) -> Object.values(item)
console.log(
    Object.values(laptop1)
)
let values = Object.values(laptop1)

values.forEach(value => {
    console. log("value: ", value)
})
