import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation' 
import Home from './components/screens/Home'
import Experience from './components/screens/Experience'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
