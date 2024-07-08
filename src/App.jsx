import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import About from "./About";
import LoginSignup from "./Login-Signup";
import './App.css';
import Support from './Support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignup/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/support' element={<Support/>}/>
        {/*<Route path='/devcom' element={<devcom/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
