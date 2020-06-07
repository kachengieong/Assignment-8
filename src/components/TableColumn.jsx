import React from 'react';

function TableColumn(props) {
  const handleCellClick = (event) => {
    event.target.style.backgroundColor = props.color;
  }
  return <td style={style} onClick={handleCellClick}></td>;
}

const style = {
  border: '1px solid black',
  width: '50px',
  height: '50px',
};

export default TableColumn;
