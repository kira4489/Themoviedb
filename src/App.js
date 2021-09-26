import './App.css';
import React from 'react';
import Home from "./pages/Home";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.css';
import Details from './pages/Details';
import Toprated from './pages/TopRated';
import Upcoming from './pages/Upcoming';

const history = createBrowserHistory();

function App() {
  return (
    <>
    <BrowserRouter>
       <Route history={history}>
        <Switch>
          <Route path="/detail/:id" component={Details} />
          <Route exact path="/" component={Home}/>
          <Route path ="/populars" component ={Home}/>
          <Route path ="/toprated" component={Toprated}/>
          <Route path ="/upcoming" component={Upcoming}/>
          </Switch>
      </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
