/*
  This is the parent file to Searchbox and CardList
  STATE >> props (that cant be changed in the child component)
*/

import React, {Component} from 'react';
import CardList from '../components/CardList';
import { cars } from '../cars';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      cars: [],
      searchfield: ''
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log(this.props.store)
    this.setState({ cars: cars });
    console.log("componentDidMount");
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => responde.json())
    //   .then(users => {this.setState({ cars: users })});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const filteredCars = this.state.cars.filter(car => {
      return car.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    console.log("render");
    return (
      <div className="tc">
        <h1 className="f2 gold">Rocket Powered Battle Cars</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList cars={filteredCars}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
/*
import React from 'react';
import CardList from './CardList';
import { cars } from './cars';

const App = () => {
	return (
		<CardList cars={cars}/>
	);
}
*/

