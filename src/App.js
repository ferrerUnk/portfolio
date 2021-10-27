import React, { Component } from 'react';
import Routes from './components/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
