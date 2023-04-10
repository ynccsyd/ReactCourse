import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .finally(() => {
              setLoading(false)
            });
    }, []);
    return (
        <div>
            <h2>Users</h2>
            {loading && <div>Loading</div> }
            <ul>
                {
                    users.map((user) =>
                        <li>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                    )
                }
                {/* <li>
                    <Link to="/user/1">User 1</Link>
                </li>
                <li>
                    <Link to="/user/2">User 2</Link>
                </li>
                <li>
                    <Link to="/user/3">User 3</Link>
                </li> */}
            </ul>
        </div>
    )
}

export default Users