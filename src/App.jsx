import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import About from "./About";
import LoginSignup from "./Login-Signup";
import Support from './Support';
import Contact from './Contact';
import WithAuth from './With-Auth';
import './App.css';

function App() {

  const protectedRoute = () => {
    const isUserLoggedIn = Cookies.get('UserId');
    return isUserLoggedIn ? true : false;
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignup/>}/>
        <Route path="/home" element={WithAuth(Home)} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
