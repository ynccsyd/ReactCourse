import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import Users from "./components/Users"
import User from "./components/User"
import Error404 from "./components/Error404"
import Layout from './components/Layout';
// import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='users/*' element={<Users />}>
            <Route path='user/:id' element={<User />} />
          </Route>
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
export default App;


