//*********** Kosullarla Calismak ***********

let username = prompt("Kullanici Adiniz Giriniz:")
// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}
if (username) { // if kismi her zaman true ise calisir
    console.log(` Kullanici Bilginiz ${username}`)
} else
    console.log("bilgi yok")