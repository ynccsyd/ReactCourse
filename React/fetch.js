// // Write Hello after 5 seconds
// 5sn sonra Merhaba yazar.
// setTimeout(()=>{
// console.log("Merhaba(Hello)");
// }, 5000);

// // Writes  hello every 1 second.
// Her sn Merhaba yazar.
// setInterval(() => {
// console.log("Hello, I will work every second.");
//  }, 1000);

// const sayHi = (cb)=>{
// cb();
// };
// sayHi(() => {
// console.log("Hello");
// });


// import fetch from "node-fetch"; //  932(gzipped: 498)

// fetch(" https://jsonplaceholder.typicode.com/users ")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users Uploaded!", users);
//         fetch(" https://jsonplaceholder.typicode.com/posts/1 ")
//             .then((data) => data.json())
//             .then((post) => {
//                 console.log("Post 1 Uploaded!", post);
//                     fetch(" https://jsonplaceholder.typicode.com/posts/2 ")
//                         .then((data) => data.json())
//                         .then((data) => console.log("Post 2 Uploaded", data));
//         });
// });



// async function getData() {
//     const users = await (
//         await fetch(" https://jsonplaceholder.typicode.com/users ")
//     ).json();

//     const post1 = await (
//         await fetch(" https://jsonplaceholder.typicode.com/posts/1 ")
//     ).json();

//     const post2 = await (
//         await fetch(" https://jsonplaceholder.typicode.com/posts/2 ")
//     ).json();

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }
//     getData();

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(" https://jsonplaceholder.typicode.com/users ");
    resolve(data);
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(
    " https://jsonplaceholder.typicode.com/posts/ " + post_id
        )
    resolve(data);
    });
};

(async () => {
    try {
        const users = await getUsers();
        const post = await getPost(1);
        console. log(users);
        console.log(post);
    } catch (e) {
        console. log(e);
    }
})();


// If there is more than one, it enables to sort
//Birden fazla varsa sıralamaya yarar

Promise.all([getUsers(), getPost(1)])
.then(console.log) 
.catch(console.log);
