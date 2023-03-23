//Objeler, içerisinde birden fazla değeri depolayan yapılardır.
// Property olarak bilinen bu değerler primitive(String,number, boolean 
//vb.) veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir.

//Objeler değiştirilebilen veri tiplerindendir. İçerdiği propertyler, objenin 
//kendisi const keyword ile atanmış olsa bile değiştirilebilirler.
// Fakat primitive değerlerden farklı olarak objeler, referans yoluyla değiştirilirler ve değişen obje, 
// yeni bir hafıza adresine sahip olur. Çünkü primitive değerlerin aksine objeler, JavaScript istemcisinin belleğinde, 
// sahip oldukları değerlerle değil, sistemin atadığı hafıza adresleriyle kayıtlıdırlar.
// Bunun ayrımını aşağıdaki örnekte şöyle görebiliriz.

//aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let başkaBirMesaj = "merhaba";
console.log(mesaj == başkaBirMesaj);       //true

//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
 mesaj:"merhaba"
}
let başkaBirObje = {
 mesaj:"merhaba"
}
console.log(obje == başkaBirObje);         //false
//Çünkü bu iki obje, arka planda göremediğimiz iki ayrı hafıza adresiyle tanınıyorlar, 
//bu yüzden içerikleri aynı olsa da farklı kabul ediliyorlar.

// Obje Oluşturmak
// Objeler üç şekilde oluşturulabilir. Object literal, new Object keyword’ü ve Object.create() fonksiyonuyla.
// Object literal ve new Object yöntemleri, normal bir objeyi oluştururken kullanılan yöntemlerdir.
//  Object.create() yöntemi ise, mevcut bir objeden kalıtım yoluyla bazı bilgiler alarak yeni bir obje oluşturmaya yarar.

let countriesTalkSpanish = {
    continent: "South America",
    language: "Spanish"
    };
    
    //Görev: yukarıdaki objeyle aynı propertylere sahip ve başkenti "Montevideo" olan uruguay objesini oluşturalım.
    //Alttaki yorum satırını kaldırıp kodunuzu yazmaya başlayabilirsiniz.
    
    let uruguay = Object.create(countriesTalkSpanish)
    countriesTalkSpanish.capital = "Montevideo";
    console.log(uruguay);
    console.log(countriesTalkSpanish)
    
    
    