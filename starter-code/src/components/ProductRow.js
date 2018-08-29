import React, { Component } from 'react';


const Row = ({row}) => {
  console.log(row);
  return (
    <div>
      <td>{row.name}</td>
      <td>{row.price}</td>

    </div>

  )
}

export default Row;