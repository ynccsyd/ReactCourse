
import { Formik, } from 'formik';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          gender: "",
          hobies: [],
          country:"Türkiye"
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit} >
            <label htmlFor="firstName">First Name</label>
            <input onChange={handleChange} id="firstName" name="firstName" placeholder="Jane" />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input onChange={handleChange} id="lastName" name="lastName" placeholder="Doe" />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input onChange={handleChange}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <br />
            <br />
            <span>Male</span>
            <input
              type='radio'
              name='gender'
              value="male"
              checked={values.gender === "male"}
              onChange={handleChange} />
            <span>Female</span>
            <input
              type="radio"
              name='gender'
              value="female"
              onChange={handleChange} />
            <br />
            <div>
              <input type="checkbox" name="hobies" id="Hobies" onChange={handleChange} />
              Football
            </div>
            <div>
              <input type="checkbox" name="hobies" id="Cinema" onChange={handleChange} />
              Cinema
            </div>
            <div>
              <input type="checkbox" name="hobies" id="Photography" onChange={handleChange} />
              Photography
            </div>
            <br />
            <select name="country" id="country" onChange={handleChange}>
              <option value="Türkiye">TR</option>
              <option value="England">En</option>
              <option value="USA">US</option>
            </select>
            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            {JSON.stringify(values)}
          </form>
        )}

      </Formik>
    </div>
  );
}

export default App;
