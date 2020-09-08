import React from 'react';
import NavBar from './components/navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Home from './components/home';
import Partner from './components/partner';
import Footer from './components/footer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/partner" component={Partner}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
