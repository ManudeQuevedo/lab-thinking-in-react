import React, { Component } from 'react';
import Category from './ProductCategoryRow';
import Row from './ProductRow';
import Data from '../data.json';

const Table = () => {
  let data = Data;
  //console.log(data);
  let category = [];
  data.forEach(element => {
    //console.log(element.category);
    if (!category.includes(element.category)) {
      category.push(element.category);
    }
  });
  console.log(category);
  return (
    <div>
      <table>
        <th>Name</th>
        <th>Price</th>
        {category.map((element) => {
          return <Category category={element} data={data}/>
        })}

      </table>
    </div>

  )
}

export default Table;