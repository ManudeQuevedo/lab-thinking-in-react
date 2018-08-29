import React, { Component } from 'react';
import Search from './SearchBar';
import Table from './ProductTable';

const Filter = ({handleSearch}) => {
  return (
    <div>
      <h1> hola</h1>
      <Search handleSearch = {handleSearch}/>
      <Table />
    </div>

  )
}

export default Filter