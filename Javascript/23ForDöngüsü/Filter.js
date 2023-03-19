// 5 harften fazla olanlar (6) ??
const PRODUCTS = ["Hic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]
const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)

// aktif kullanicilar 7?
const USERS = [

    { fullName: "Ayse Sumer", isActive: false },
    { fullName: "Ahmet Urgan", isActive: true },
    { fullName: "Asya Bazar", isActive: true },
    { fullName: "Aksel Durmaz", isActive: false },
]
// const ACTIVE_USERS = USERS filter(user => user.isActive === true)
const ACTIVE_USERS = USERS.filter(user => user.isActive)
console.log(ACTIVE_USERS)


const users = [
	{fullName: "Mehmet Veli", isActive: false},
	{fullName: "Ali Duran", isActive: true},
    {fullName: "Ahmet Yılmaz", isActive: true},
    {fullName: "Oğuz Şahin", isActive: false},
]
//Yukardaki users dizisindeki nesneler içerisinden isActive'i true olanları almak istiyorum.

const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers.fullName); //(2)[{...},{...}] (Ali Duran, Ahmet Yılmaz)
//Üst satırdaki sonuç bize, elemanları nesne olan 2 elemanlı bir dizi olduğunu söylüyor.

//
const persons = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];
//Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
const buyukotuz=persons.filter(i=>i.age>30)
console.log(buyukotuz)

//Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
const jsbilen=persons.filter(person=>person.languages=="JavaScript")
console.log(jsbilen)

