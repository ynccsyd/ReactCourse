
import { BrowserRouter, Route, Routes, NavLink, } from 'react-router-dom';
import './App.css';
import ReactMemo from "./components/ReactMemo/ReactMemo"
import ChangeState from './components/ReactMemo/ChangeState';
// import Validation1 from "./components/Validation_1/Validation_1"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>React Memo</h1>
        <ul>
          <li>
            <NavLink to='/reactMemo'>
              Without Re-render
            </NavLink>
          </li>
          <li>
            <NavLink to='/changeState'>
              Changing State
            </NavLink>
          </li>
        </ul>
        <h1>Use Memo</h1>
        <h1>UseCallBack</h1>
      </nav>
      <Routes>
        <Route path='reactMemo' element={<ReactMemo />} />
        <Route path="changeState" element={<ChangeState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

