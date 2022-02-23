import './App.css';
import { Component } from 'react';
import {CardList} from './components/cardList/CardList'
import { SearchBox } from './components/searchBox/SearchBox';

class App extends Component{

  constructor(){
    super()
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => this.setState({monsters: data}))
    .catch(err => console.log('Fetching failed'))
  }
  
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  render(){
    const {monsters, searchfield} = this.state
    const filterMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase()))
    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox 
        onSearchChange = {this.onSearchChange} 
        placeholder = "search monster"/>  {/* 這裡要用""才會顯示" */}
        <CardList monsters = {filterMonster} /> 
      </div>
    );      
  }
}

export default App;