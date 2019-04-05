import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import MyCart from './components/MyCart';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/mycart" component={MyCart} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
