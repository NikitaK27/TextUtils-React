import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

let name = "Nikita";
function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#212529';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm heading="Entre your output" mode={mode} />
          {/* </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
