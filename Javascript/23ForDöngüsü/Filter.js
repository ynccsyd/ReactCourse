// 5 harften fazla olanlar (6) ??
const PRODUCTS = ["Hic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]
const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console. log (NEW_PRODUCTS)
// aktif kullanicilar 7?
const USERS = [
I
{fullName: "Ayse Sumer", isActive: false),
{{full Name: "Ahmet Urgan", isActive: true},
((full Name: "Asya Bazar", isActive: true),
{fullName: "Aksel Durmaz", isActive: false),
// const ACTIVE_USERS = USERS filter(user => user.isActive === true)
const ACTIVE_USERS = USERS.filter(user => user.isActive )
console, log(ACTIVE_USERS)