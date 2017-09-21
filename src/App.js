import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Baking from './components/Baking/Baking'
import Shop from './components/Shop/Shop'
import Cart from './components/Shopping-Cart/Cart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Landing}></Route>
            <Route path='/baking' component={Baking}></Route>
            <Route path='/shop' component={Shop}></Route>
            <Route path='/cart' component={Cart}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
