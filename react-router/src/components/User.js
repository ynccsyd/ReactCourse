import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from "axios"

const User = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const {id}=useParams();
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data) );
    }, []);
  return (
    <div>
        <h2>User Detail</h2>
        {loading && <div>Loading</div> }
        <code>{JSON.stringify(user)}</code>
    </div>

  )
}

export default User