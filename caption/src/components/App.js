import React, { Component } from 'react';
import logo from '../instagram.svg';
import '../css/App.css';
import PhotosContainer from './PhotosContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Caption</h1>
        </header>
        <PhotosContainer />
      </div>
    );
  }
}

export default App;
