import React from 'react';
import Card from './Card';

const CardList = ({ cars }) => {
	return (
		<div>
			{
				cars.map((user, i) => {
					return (
						<Card key={i} id={cars[i].id} name={cars[i].name} email={cars[i].email}/>
					);
				})
			}
		</div>	
	);
}

export default CardList;