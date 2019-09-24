//import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';

import Footer from './components/layout/Footer';
import Main from './components/pages/Main';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import "./App.css";


function App() {

  return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>

            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Footer/>
          </div>
        </div>
      </Router>      
  )


}

export default App;
