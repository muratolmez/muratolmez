import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import userform from './components/userform';
import finance from './components/finance';
import main from "./components/main";

class App extends Component {

  
render() {
    return (
        <Router>
          <Switch>
          <Route exact path="/" component={main} />
          <Route exact path="/userform/" component={userform} />
          <Route path="/finance/" component={finance}/>
          </Switch>
          </Router>
    );
  }
}

export default App;