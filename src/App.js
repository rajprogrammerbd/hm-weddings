import React from 'react';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import { Switch, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
      <React.Fragment>
         <Switch>
            <Route path="/login" component={() => <Login />} />
            <Route path="/register" component={() => <Register />} />
            <Route path="/" component={() => <Home />} />
         </Switch>
      </React.Fragment>
  );
}

export default App;
