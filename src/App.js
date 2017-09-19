import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Landing}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
