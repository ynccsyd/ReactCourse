import { useEffect, useState } from 'react'
// import axios from "axios"

const Users = () => {
    const[users, setUsers]=useState([])
   const [isLoading, setisLoading] = useState(true); //extention usf
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((e)=> console.log(e))
            .finally(() => {
              setisLoading(false)
            } )
         
    }, []);

    /* axios 
    Axios ile servis çağrımı yaptığımızdan JSON parse işlemi yapmamıza gerek yoktur.
   ve daha geniş bir browser desteği var */
    // useEffect(() => {
    //     axios('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => setUsers(res.data))
    //         .catch((e)=> console.log(e))
    //         .finally(() => {
    //           setisLoading(false)
    //         } )
         
    // }, []);

    return (
        <div>
            <h1>Users</h1>
            {isLoading && <div>Loading...</div> }
            {
                users.map((user)=>(
                    <div key={user.id}>{user.name} </div>
                ) ) 
            }
        </div>
    )
}

export default Users