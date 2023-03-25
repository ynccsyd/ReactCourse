// JSON dosyasından veri çekmek
fetch("setting.json")
    .then(response => {
        return response.json()
    }

    ).then(responseJson => {
        console.log(responseJson)
        console.log(responseJson.userName) // fakeName
    })

// bu şekilde de yazılabilir return yazmadan
// fetch("setting.json").then(
//     response  =response.json()

// ).then(responseJson =>{
//     console.log(responseJson)
//     console.log(responseJson.userName) // fakeName
// })

// API üzerinden veri çekmek
let userListDOM = document.querySelector("#userList")

fetch(" https://jsonplaceholder.typicode.com/posts ").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement("li")
        liDOM.innerHTML = item.title
        userListDOM.appendChild(liDOM)
    })
})


//Fetch API, kaynakları (ağ genelinde dahil) getirilmesine yönelik basit bir arayüzdür. 
// Promise ES6 ile gelen bir özelliktir. Callback fonksiyonlarının yerine kullanabiliyoruz
/*
*fetch(), bu yöntem bir kaynak almak için kullanılır.

*Headers, response/request başlıklarını temsil ederek bunları sorgulamanıza ve sonuçlara bağlı olarak farklı eylemler gerçekleştirmenize olanak tanır.

*Request , bir kaynak talebini temsil eder.

*Response, bir isteğe verilen yanıtı temsil eder.
 */

//// GET İsteği
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json()) //parse json data
    .then(function (todos) {
        todos.forEach((todo) => {
            console.log(todo.title); //Başlıkları console' a yazdırma
        });
    });

//POST İsteği Yapma
//POST isteği ile verimizi servera gönderelim
let payload = {
    title: "Blog Title",
    body: "lorem ipsum",
    userId: 1
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-type": "application/json; charset=UTF-8" }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));    

//
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then(function (todos) {
        todos.forEach(todo => {
            console.log(todo.title);//Başlıkları console' a yazdırma
        });
    })
    .catch((err) => console.log(err))
//Ve en sonunda catch() metoduyla herhangi bir aşamada hata oluşursa,
// bu hatayı parametre olarak alıp console’a yazdırıyoruz.

//
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log("error:", error))

//
fetch("https://jsonplaceholder.typicode.com/comments")
.then((response)=>response.json())
.then((json)=>json.forEach((item) => {
  console.log(item.email)
}))
.catch((err)=>console.log(err))
