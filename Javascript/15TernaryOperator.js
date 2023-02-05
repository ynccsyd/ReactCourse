//***** ternary operator ile short if kullanimi **************
// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz
let userName = prompt("Kullanici Bilginiz Yaziniz")
let info = document.querySelector("#info")
// ternary kullanimi:
// kosul ? dogruysa : yanlissa
// userName.length > 0 ? userName : "Kullani Bilginiz Bulunamadi : ("]
info.innerHTML = `${userName.length > 0 ? userName  : "Kullanici Bilginiz Bulunamadi :( "}`

// Ternary Operatorleri Zincirleme
var money = 40;
var canBuy = 
    (money < 17) ? "Satin alamazsin..":
    (money > 30) ? "Satin alabilirsin..":
    "Para miktarini girmen gerekmektedir..";

console.log(canBuy) // "Satın alabilirsin.."
