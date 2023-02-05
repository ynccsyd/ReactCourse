// Arrow function Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
function hello(firstName) {
    console. log(`Merhaba ${firstName}`)
}
hello("JavaScript")
const helloFuncV1 = (firstName) => { console.log( `Merhaba ${firstName}`) }
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log( `Merhaba ${firstName}` )// bir değişken/parametre var ve bir dönüş alındı
helloFuncV2("helloFuncV2")                                             //bu yüzden parametre paranteze gerek yok 


const helloFuncV3 = (firstName, lastName) => //parametre 2 ve parantez gerekli
console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("helloFuncV3", "Last Name info")

const helloFuncV4 = (firstName, lastName) =>{
    let info = `Merhaba ${firstName} ${lastName}`
    console. log(info)
    return info
}
    helloFuncV4("helloFuncV4", "Other Info")
