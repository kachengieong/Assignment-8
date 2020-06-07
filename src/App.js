import React, { Component } from 'react';
import Table from './components/Table';
import './App.css';

class App extends Component {
  handleClick = (e) => {
    console.log('Clicked');
    this.setState(
      { [e.target.name]: e.target.value++ },
      console.log({ [e.target.name]: e.target.value })
    );
  };

  render() {
    return (
      <>
        <Table />
      </>
    );
  }
}

export default App;
