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