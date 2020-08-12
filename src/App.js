import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Container from './components/container'

import Body from './components/body'

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Sala3 from './components/sala3';
import Sala2 from './components/sala2';
import Sala1 from './components/sala1';

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/' exact={true} component={Body} />
          <Route path='/sala1' exact={true} component={Sala1}/>
          <Route path='/sala2' exact={true} component={Sala2}/>
          <Route path='/sala3' exact={true} component={Sala3}/>
      </Switch>
    </Router>
  );
}

export default App;
