
import { BrowserRouter, Route, Routes, NavLink, } from 'react-router-dom';
import './App.css';
import ReactMemo from "./components/ReactMemo/ReactMemo"
import ChangeState from './components/ReactMemo/ChangeState';
import UseMemo from './components/UseMemo/UseMemo';
import UseCallBack from "./components/UseCallBack/UseCallBack"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>React Memo</h1>
        <ul>
          <li>
            <NavLink to='/reactMemo'
              style={({ isActive }) => ({ color: isActive ? "blue" : "grey", })} >
              Without Re-render
            </NavLink>
          </li>
          <li>
            <NavLink to='/changeState'
              style={({ isActive }) => ({ color: isActive ? "blue" : "grey", })} >
              Changing State
            </NavLink>
          </li>
        </ul>
        <h1>Use Memo</h1>
        <ul>
          <li>
            <NavLink to='/useMemo'
              style={({ isActive }) => ({ color: isActive ? "blue" : "grey", })} >
              useMemo
            </NavLink>
          </li>
        </ul>
        <h1>UseCallBack</h1>
        <ul>
          <li>
            <NavLink to='/useCallBack'
              style={({ isActive }) => ({ color: isActive ? "blue" : "grey", })} >
              UseCallBack
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='reactMemo' element={<ReactMemo />} />
        <Route path="changeState" element={<ChangeState />} />
        <Route path="useMemo" element={<UseMemo />} />
        <Route path="useCallBack" element={<UseCallBack/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

