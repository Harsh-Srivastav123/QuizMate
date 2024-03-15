import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Signup from './pages/login/Signup';
import LoginPage from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext.jsx';
import QuestionParam from './pages/questionParam/QuestionParam.jsx';
import Quiz from './pages/quizPage/Quiz.jsx';
import QuizResult from './pages/quizResult/QuizResult.jsx';

function App() {
 
  const {currentUser} =useContext(AuthContext)

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/questionParam"  element={<QuestionParam/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/quizResult" element={<QuizResult/>}/>
      </Routes>
    </div>
  )
}

export default App