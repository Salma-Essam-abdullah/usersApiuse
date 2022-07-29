
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from './Index/Index';
import Contact from './Contact/Contact';
import App2 from './Single/App2';

function App() {
  return (
    <>
<Router>
      <div>
        <Switch> 
        <Route name="single" path="/single/:id">
          <App2/>
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
          <Index/>
          </Route>
         
        </Switch>
      </div>
</Router>
  </>
  );
}

export default App;
