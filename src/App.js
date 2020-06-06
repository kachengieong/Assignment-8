import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Select a color from dropdown menu of colors
class App extends Component {
  constructor() {
    super(props);
    this.state = {color: ""};
  }
  render() {
    return (
      <select value={this.state.color} onChange={this.handleChange}>        
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="gray">Gray</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
      </select>
    );
  }
}

export default App;
