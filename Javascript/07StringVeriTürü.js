// **************** String Veri Turu Islemleri ****************
// https://www.w3schools.com/jsref/jsref_obj_string.asp
let email = " hakanyalcinkaya@gmail.com "
let firstName = "hakan"
let lastName = "YALCINKAYA"

// string karakter sayisi -> length
console.log( email.length ) // 25

// Ilk Karakteri Bulmak -> [0]:
console. log(firstName[0]) // h
console.log(firstName.charAt(0)) // h

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase()
console.log(firstName) //HAKAN

firstName=firstName.toLowerCase() 
console.log(firstName)//hakan

