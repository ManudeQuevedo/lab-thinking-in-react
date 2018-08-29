import React, { Component } from 'react';
import "./App.css";
import Filter from './components/FilterableProductTable';
import Category from './components/ProductCategoryRow';
import Row from './components/ProductRow';
import Search from './components/SearchBar';
import Table from './components/ProductTable';
import data from './data.json'



class App extends Component {
    state = {
        search:""
    }

    handleSearch = (e) =>{
        console.log(e.target.value)
    }

    displayItems = ({search})=>{
        search= search.toUpperCase();
        let resultado = [];
        for(let i = 0; i < data.length; i++){
            if(data[i].name.toUpperCase().indexOf(search) !== -1){
                resultado.push(data[i])
            }
        }
    }
    render() {
        return (
            <div className="App">
                <h1 className="title">Iron Thinking in React</h1>
                <Filter handleSearch = { this.handleSearch} />
            </div>
        );
    }
}

export default App;

