import React, { Component } from 'react';
import './App.css';
import Posts from './Posts.js';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header className="hn-header">
          <img src="y18.gif" ></img>
          <span className="hn-title">Hacker News</span>
        </header>
        <div className="App">
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;
