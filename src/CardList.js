/*
	Child Component to App.js
	accepts cars as props even though in App.js it's a state
*/

import React from 'react';
import Card from './Card';

const CardList = ({ cars }) => {
	return (
		<div>
			{
				cars.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={cars[i].id} 
							name={cars[i].name} 
						/>
					);
				})
			}
		</div>	
	);
}

export default CardList;