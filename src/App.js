import React, { Component } from 'react';
import Browser from './components/Browser/Browser'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Browser/>
          <VideoPlayer/>
        </header>
      </div>
    );
  }
}

export default App;
