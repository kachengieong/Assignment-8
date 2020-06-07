import React, { Component } from 'react';

class TableColumn extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.onColChange(event.target.value);
  };

  render() {
    return (
      <div>
        <form name='form'>
          <button name='col' value={this.props.col} onClick={this.handleClick}>
            Add Col
          </button>
        </form>
      </div>
    );
  }
}

export default TableColumn;
