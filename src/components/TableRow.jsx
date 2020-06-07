import React from 'react';
import TableColumn from './TableColumn';
import { v4 as uuidv4 } from 'uuid';

function TableRow(props) {
  let columns = [];

  for (let i = 0; i < props.columns; i++) {
    columns.push(<TableColumn key={uuidv4()} color={props.color} />);
  }

  return <tr>{columns}</tr>;
}

export default TableRow;
