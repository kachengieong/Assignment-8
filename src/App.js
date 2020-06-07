import React, { Component } from 'react';
import Table from './components/Table';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {color: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({color: event.target.value});
  } 
  // Select a color from dropdown menu of colors
  render() {
    return (
      <>
        <select value={this.state.color} onChange={this.handleChange}>
        <option value="none">---</option>        
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="gray">Gray</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
      </select>
      <Table color={this.state.color} />
      </>
    );
  }
}

export default App;
