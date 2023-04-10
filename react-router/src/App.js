import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import Users from "./components/Users"
import User from "./components/User"



export default function App() {
  return (
    <Router>
     
        <Routes>
        <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='users/*' element={<Users />}>
            <Route path='user/:id' element={<User />} />
          </Route>
        </Routes>
 
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }
// function Users() {
//   return <h2>Users</h2>;
// }

