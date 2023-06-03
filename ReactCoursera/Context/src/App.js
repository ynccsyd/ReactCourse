import './App.css';
import { UserProvider, useUser } from "./UserContext.js"
const LoggedInUser = () => {
  const {user}=useUser();
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
}
const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
}
const Page = () => {
  const {user}=useUser();
  return (
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Explicabo perferendis dolor numquam ipsa ut? Facere sit
        illo facilis accusantium deserunt asperiores adipisci!
        Distinctio nulla, beatae modi inventore illo ex nisi?
      </p>
      <p>Written by {user.name}</p>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}
function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}

export default Root;
