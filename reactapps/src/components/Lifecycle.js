import {useState, useEffect} from 'react'

const Lifecycle = () => {
    const[number, setNumber]=useState(0)
    const[name, setName]=useState("Ali")

    // useEffect(() => {
    //    console.log("state güncellendi") 

    // });

    //dom a mount olduğu anda o anı yakalar
    useEffect(() => {
        console.log("component mount edildi") 
    }, []); //dependency array : içini boş bırakınca mount edildiği anı gösterir

    // sadece number ı izlemek istiyorsam
    useEffect(() => {
        console.log("number state güncellendi ") 
    }, [number]);

    useEffect(() => {
        console.log("number veya name state güncellendi ") 
    }, [number, name]);

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={()=> setNumber(number+1) }> INCREASE</button>
        <hr />
        <h1>{name}</h1>
        <button onClick={()=> setName("Veli") }> Click</button>
    </div>
  )
}

export default Lifecycle