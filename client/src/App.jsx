import './App.css';
import Home from './pages/home/Home';
import {Routes, Route} from "react-router-dom";
import Signup from './pages/login/Signup';
import LoginPage from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext.jsx';

function App() {
 
  const {currentUser} =useContext(AuthContext)

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        
      </Routes>
    </div>
  )
}

export default App