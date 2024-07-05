import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Chat from './Chat';


function App() {

  return (
    <Router>
        <Routes>
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/chat' element={<Chat/>}/>
          {/* <Route path='/about' element={<About/>}/>
          <Route path='/devcom' element={<devcom/>}/> */}
        </Routes>
    </Router>
  )
}

export default App
