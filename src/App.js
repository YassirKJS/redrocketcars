import React from 'react';
import CardList from './CardList';
import { cars } from './cars';

const App = () => {
	return (
		<CardList cars={cars}/>
	);
}

export default App;