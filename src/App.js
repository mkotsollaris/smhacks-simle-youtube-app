import React, { Component } from 'react';
import Browser from './components/Browser'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Browser/>
        </header>
      </div>
    );
  }
}

export default App;
