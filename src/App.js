import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';

//import Footer from './components/layout/Footer';
import Main from './components/pages/Main';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import "./App.css";

export const rContext_ShowMore = React.createContext(null);

function App() {
  const [doShowMore, setShowMoreX] = React.useState({});
  React.useEffect(() => {

  }, [doShowMore]);
  return (
    <rContext_ShowMore.Provider value={{ doShowMore, setShowMoreX }}>
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            {/* <Footer/> */}
          </div>
        </div>
      </Router>      
    </rContext_ShowMore.Provider>
  )
}

export default App;
