import React, { Component } from 'react';
import Header from './components/Header/Header';
import './styles/App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
