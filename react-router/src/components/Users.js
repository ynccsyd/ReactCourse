import React from 'react'
import {Link} from "react-router-dom"

const Users = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/user/1"></Link>
            </li>
            <li>
                <Link to="/user/2"></Link>
            </li>
            <li>
                <Link to="/user/3"></Link>
            </li>
        </ul>
    </div>
  )
}

export default Users