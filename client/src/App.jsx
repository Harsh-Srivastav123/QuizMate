import './App.css';
import Home from './pages/home/Home';
import {Routes, Route} from "react-router-dom";
import SignupPage from './pages/login/Signup';
import LoginPage from './pages/login/Login';

function App() {
 

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        
      </Routes>
    </div>
  )
}

export default App