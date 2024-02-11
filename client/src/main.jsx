import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { AuthContextProvider } from './context/authContext.jsx'
import { AuthContext } from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>  
        <App/>
      </AuthContextProvider>
    </BrowserRouter>
  //</React.StrictMode>,
)