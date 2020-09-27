import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import About from './components/pages/About';
import Myworld from './components/pages/Myworld';
import Divein from './components/pages/Divein';
//import getStarted from './components/pages/getStarted';

// class App extends Component{
//   render(){
//     return(
//       <div className="App"></div>
//     )
//   }
// }

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path ='/'exact component={Home}/>
      <Route path ='/About' component={About}/>
      <Route path ='/Myworld' component={Myworld}/>
      <Route path ='/Divein' component={Divein}/>
      {/* <Route path ='/getStarted' component={getstarted}/> */}


      </Switch>
      </Router>
    </>
  );
}

export default App;
