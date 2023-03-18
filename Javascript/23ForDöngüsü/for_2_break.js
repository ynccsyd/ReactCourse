const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur,', 'adipisicing', 'elit']


let counter = 0
// for (; counter < 10; counter++) {
//     console.log(counter) //5 olunca dur
//     if (counter === 5) { break } //5 olunca dur:0,1,2,3,4,5
// }

// for (; counter < 10; counter++) {
//     if (counter === 5) { continue }
//     console.log(counter) //5 geldiğinde 5i yazmaz ama devam eder :012346789
// }

const UL_DOM = document.querySelector('#userList')
let index = 0
for (; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == "dolor") { break } // dolor'a gelince dur
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
} // lorem, ipsum yazar listeye:)