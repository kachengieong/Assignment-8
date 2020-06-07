import React, { Component } from 'react';

export class TableRow extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.onRowChange(event.target.value);
  };

  handleRemove = (event) => {
    event.preventDefault();
    this.props.onRemoveRow(event.target.value);
  };
  render() {
    return (
      <div>
        <form name='form'>
          <button name='row' value={this.props.row} onClick={this.handleClick}>
            Add Row
          </button>
          <button
            name='removeRow'
            value={this.props.row}
            onClick={this.handleRemove}
          >
            Remove Row
          </button>
        </form>
      </div>
    );
  }
}

export default TableRow;
