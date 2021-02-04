import './App.css';
import React from 'react';
import Home from "./pages/Home"
import'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Details from './pages/Details';

function App() {
  return (
    <>
       <Router>
        <Switch>
          <Route exact path="/detail/:id" component={Details} />
          <Route exact path="/">
            <Home  />
          </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
