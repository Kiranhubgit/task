import './App.css';
import React from 'react';
import Header from './components/Header';
import { Home } from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Alert from './components/Alert';
// import Section from './components/Section';
import NoteState from "./context/notes/NoteState";
import About from './components/About';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import { useState } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');  // It shows wheater a dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1500);
  }

  

  return (
    <>
  <NoteState>
  <Router>

    <Header showAlert={showAlert} title="Video Playlist" AboutText="About Us" mode={mode} toggleMode= {toggleMode} />
    <Alert alert= {alert} />

    <div className="container">
    <Routes>

    <Route exact path='/' element={<Home showAlert={showAlert} />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route exact path='/login' element={<Login showAlert={showAlert} />}></Route>
      <Route exact path='/signup' element={<Signup showAlert={showAlert} />}></Route>
      <Route exact path='/tab' element={<Tabs/>}></Route>
      
    </Routes>
    </div>
    {/* <Tabs/> */}
   
    {/* <Playlist/>  */}
    <Footer/>
    </Router>
    </NoteState> 
    </>
  );
}

export default App;
