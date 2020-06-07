import React, { Component } from 'react';
import TableRow from './TableRow';
import TableColumn from './TableColumn';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: this.props.color,
      row: [],
      col: [],
    };
  }

  componentDidUpdate() {
    if (this.props.color !== this.state.colors){
      this.setState({colors: this.props.color})
    }
  }

  onRowChange = () => {
    let row = this.state.row;
    row.push('   ');
    this.setState({ row });
  };

  onColChange = () => {
    let col = this.state.col;
    col.push('');
    this.setState({ col });
  };

  onRemoveRow = () => {
    let row = this.state.row;
    row.pop();
    this.setState({ row });
  };
  
  handleCellClick = (event) => {
    event.target.style.backgroundColor = this.state.color;
  }
  render() {
    return (
      <div>
        <TableRow
          row={this.state.row}
          onRowChange={this.onRowChange}
          onRemoveRow={this.onRemoveRow}
        />
        <TableColumn col={this.state.col} onColChange={this.onColChange} />
        <table>
          {this.state.row.map((r) => {
            return (
              <tbody key={uuidv4()}>
                <tr>
                  <td style={style} onClick={this.handleCellClick}>{r}</td>
                </tr>
              </tbody>
            );
          })}

          {this.state.col.map((c) => {
            return (
              <tbody key={uuidv4()}>
                <tr>
                  <td style={style} onClick={this.handleCellClick}>{c}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

const style = {
  border: '1px solid black',
};
// Table.propTypes = {
//   row: PropTypes.number,
//   col: PropTypes.number,
// };
export default Table;
