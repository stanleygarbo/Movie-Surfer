import React, { useEffect,useState } from 'react';
import Nav from './components/navigation/Nav'
import LandingPage from './components/landingpage/LandingPage';
import {Switch,Route,useLocation} from 'react-router-dom'
import Results from './components/search_results/Results';
import {AnimatePresence} from 'framer-motion'
import Preview from './components/preview/Preview';

function App() {
  const location = useLocation()
  const [windowDimensions,setWindowDimensions] = useState({})

  const updateWindowDimensions = () =>{
      setWindowDimensions({x:window.innerWidth,y:window.innerHeight})
  }

  useEffect(()=>{
    window.addEventListener('resize',updateWindowDimensions)
    return ()=> window.removeEventListener('resize',updateWindowDimensions)
  },[])

  useEffect(()=>updateWindowDimensions(),[])

  return (
      <div className="App">
        <Nav windowDimensions={windowDimensions} />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/search/:query' component={Results} />
              <Route exact path='/preview/:id' component={Preview} />
          </Switch>
        </AnimatePresence>
      </div>
  );
}

export default App;
