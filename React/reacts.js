// function App() {
//     return React.createElement("div", null, "Hello"); //bu aslında div oluşturur ama her defasında bunu yapmaya gerek yok
//     // // return (
//     //     <div>
//     //     //
//     //     <Header />
//     //     <Header
//     //     />
//     //     <Header />
//     //     // </div>
//     //     // );
// }
// export default App;

// Koşullu RENDER

import "./App.css";

const name = "Mehmet";
const surname = "Seven";
const isLoggedIn = false;
function App() {
    return (
        <>
            <h1>
                {isLoggedIn
                    ? `Benim adim ${name}, soyadım ${surname}`
                    : "Giriş yapmadiniz."}
            </h1>
        </>
    );
}
export default App;

// Koşullu render fonk

{
    friends ? <div>var</div> : <div>yok</div>
}

// yukarıdaki fonk ile aynı işi yapar

{friends && <div>var</div>}
{!friends && <div>yok</div>}
