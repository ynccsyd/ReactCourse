// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
//- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/GlobalObjects/Array
let items = [10, 20, 30, 40,]
console.log("items - ilk hali : ", items)

// Array: sona oge/eleman eklenek => push
items.push(50)
// Array: basa oge eklemek -> unshift
items.unshift(8)
console.log("8:", items)

//Array: sondaki ogeyi cikarmak -> pop listeden elemanı çıkarır
let lastItem=items.pop() // son elemanı last item içine ekledik
console.log("lastItem: ", lastItem, "items:", items)

//Array: bastaki ogeyi cikarmak -> shift listeden elemanı çıkarır
let firstItem=items.shift()
console.log("firstItem: ", firstItem, "items:", items)


// ilk ögenin değiştirilmesi
items[0]=5;
console.log(items)
// sonuncu ögenin değiştirilmesi
items[items.length-1]=200;
console.log(items)

//splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.splice(1,0,'baseball');
console.log(sports); // basketball, baseball, football, tennis

/** ARRAY BUILDER **/
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple','pear','plum']

/** */
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array
//['apple', 'pear', 'plum', 'blueberry', 'strawberry'

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);
//['onion', 'parsley', 'carrot', 'beetroot']

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)
//Output: 201, 200

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)
//['apples'] 'not' ['apples','pears']
