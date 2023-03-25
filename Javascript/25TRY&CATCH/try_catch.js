// hata-yonetimi-icin-try-catch-kullanimi
/*try...catch ifadesini basitçe ifade edersek; Herhangi bir iş yaparken bir hatayla 
karşılaşılma durumunun ele alınması anlamına gelmektedir.
try anahtar kelimesi kodları çalışma zamanında test etmek için kullanılırken,
 catch anahtar kelimesi ise çalışma zamanında hata çıkması durumunda bu hataları yakalamak için kullanılır.*/

try {
    //Çalıştırılacak kodlar
} catch (hata) {
    //Hata yakalandığında çalışacak kodlar
} finally {
    //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
}


let products;
try {
    products.forEach(item => console.log(item)); // bu kodun dene
} catch (error) {                                  // hata bulursan aşağıdaki kodu çalıştır
    console.log("error:", error)
    // products = [1, 2, 3]
    // products.forEach(item => console.log(item));
}

console.log("hata yonetimi duzgun calisiyor")
let info = "kodluyoruz"
console.log(info)


//Sample 
{/* <input type="text" id="dogumTarihi" />
<button onclick="valid()">Gönder</button> */}
function valid() {
    try {
        if (document.querySelector("#dogumTarihi").value == "") {
            throw 'Doğum tarihini boş geçemezsiniz';
        };
    } catch (err) {
        alert(err);
    }
}