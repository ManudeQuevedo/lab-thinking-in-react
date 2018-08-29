import React, { Component } from 'react';
import Row from './ProductRow';

const Category = ({ category, data }) => {
  console.log(category, data)
  const rows=[];
    data.forEach(element => {
    //console.log(element.category);
      if (element.category==category) {
        rows.push(element);
    }
  });
  return (
    <div>
      <h1>{category}</h1>
      {rows.map((row)=>{
        return <Row row={row} />
      })}
    </div>
  )
}

export default Category;