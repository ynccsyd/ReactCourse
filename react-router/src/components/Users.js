import { useEffect, useState, } from 'react'
import { NavLink, Outlet } from "react-router-dom"
import axios from "axios"


const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);
    return (
        <div>
            <nav>
                <h2>Users</h2>
                {loading && <div>Loading...</div>}
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <NavLink to={`user/${user.id}`} >
                                {user.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <hr />
            </nav>
            <Outlet />
        </div>
    )
}

export default Users