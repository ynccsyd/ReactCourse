/*JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.*/
// forEach fonksiyonu item, index, array olmak üzere 3 parametre alabilir.

const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]
// PRODUCTS forEach((product, index, array) => array[index] = product + 111" )
PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`)//toUpperCase
console.log (PRODUCTS)

// const userListDOM = document.querySelector("#userList")
// for (index = 0; index < users.length; index++) {
//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = users[index]
//     userListDOM.appendChild(liDOM)
// }

const userListDOM = document.querySelector("#userList")
PRODUCTS.forEach(item => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = item
    userListDOM.append(liDOM)
})

//
const animals = ["cat" , "dog" , "bird", "horse"];
  
animals.forEach((value , index , array) => {
  console.log('value: ', value ); 
  console.log('value parametresinin aldığı index :', index );
  console.log('array:' , array );
});

//
const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function(numbers){
  newArray.push(numbers*3);
});
console.log(newArray);

// output = [12, 33, 27]

/** */
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
// 0. kiwi
// 1. mango
// 2. apple
// 3. pear

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${fruit}`);
});