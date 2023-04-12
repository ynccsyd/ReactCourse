
import { BrowserRouter, Route, Routes, NavLink, } from 'react-router-dom';
import './App.css';
import FormikForm from './components/FormikForm';
import UseFormik from "./components/UseFormik";
import Validation1 from "./components/Validation_1/Validation_1"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to='/formik'>
              FormikForm
            </NavLink>
          </li>
          <li>
            <NavLink to='/useFormik'>
              useFormik
            </NavLink>
          </li>
          <li>
            <NavLink to='/validation_1'>
              FormValidation_1
            </NavLink>
          </li>
        
        </ul>
      </nav>
      <Routes>
        <Route path='/formik' element={<FormikForm />} />
        <Route path='/useFormik' element={<UseFormik />} />
        <Route path='/validation_1' element={<Validation1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
