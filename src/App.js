
import React, { Component } from 'react';
import Table from './components/Table';
import './App.css';

// Select a color from dropdown menu of colors
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {color: ""};
  }

  handleClick = (e) => {
    console.log('Clicked');
    this.setState(
      { [e.target.name]: e.target.value++ },
      console.log({ [e.target.name]: e.target.value })
    );
  };

  handleChange = (event) => {
    this.setState({color: event.target.value});
  } 

  render() {
    return (
      <>
        <Table />
        <select value={this.state.color} onChange={this.handleChange}>
        <option value="none">---</option>        
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="gray">Gray</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
      </select>
      </>
    )
  }
}

export default App;