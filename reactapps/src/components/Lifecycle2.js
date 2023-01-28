import React from 'react'
import {useState, useEffect} from 'react'

const Lifecycle2 = () => {
    const[number, setNumber]=useState(0)


    useEffect(() => {
        console.log("component mount edildi")
        
       const interval=setInterval(() => {
        setNumber((n) => n+1);
        
       }, 1000); //her saniyede artıyor
       return () => clearInterval(interval) // bu işlemle sürekli güncellemeye çalışmaz mesela
      }, []);                               //bir soket bağlantısını açıp kapatma işleminde kullanılabilir ve hata vermez console da:)

    // useEffect(() => {
    //     console.log("component mount edildi")
   
    //  return () => console.log("component unmount edildi")
    // }, []); 
    

    // sadece number ı izlemek istiyorsam
    useEffect(() => {
        console.log("number state güncellendi ") 
    }, [number]);



  return (
    <div>
        <h1>{number}</h1>
        <button onClick={()=> setNumber(number+1) }> INCREASE</button>
        
    </div>
  )
}

export default Lifecycle2