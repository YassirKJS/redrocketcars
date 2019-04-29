/*
  This is the parent file to Searchbox and CardList
  STATE >> props (that cant be changed in the child component)
*/

import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchFieldAction, requestCarsAction } from '../actions';

const mapStateToProps = state => {
  return {
    //props
    searchField: state.searchCarsReducer.searchField,
    cars: state.requestCarsReducer.cars,
    isPending: state.requestCarsReducer.isPending,
    error: state.requestCarsReducer.error
  }
}

//dispatch the ACTION setSearchField
//the ACTION is just a fct that returns an object
//we cant to dispatch that so the REDUCERS are aware of it
//then the searchField is going to listen to the user input
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchFieldAction(event.target.value)),
    onRequestCars: () => dispatch(requestCarsAction())
  }
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      cars: []
      //searchfield: '' removed because redux
    };
    console.log("constructor");
  }

  componentDidMount() {
    // console.log(this.props.store)
    // this.setState({ cars: cars });
    // console.log("componentDidMount");
    // fetch('https://api.myjson.com/bins/v9hnc')
    //   .then(response => response.json())
    //   .then(users => {this.setState({ cars: users })});

    /* replace above with this*/
    this.props.onRequestCars();
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value});
  // }
  //removed because redux, it s already coming up as props

  render() {
    const { searchField, onSearchChange, cars } = this.props;
    const filteredCars = cars.filter(car => {
      return car.name.toLowerCase().includes(searchField.toLowerCase()); //replaced this.state.searchfield
    });
    console.log("render");
    return (
      <div className="tc">
        <h1 className="f2 gold">Rocket Powered Battle Cars</h1>
        <Searchbox searchChange={onSearchChange}/>
        <Scroll>
          <CardList cars={filteredCars}/>
        </Scroll>
      </div>
    );
  }
}
// connect the App component: subscribe to any changes in the redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);


