import React from 'react';

const Card = ({id, name, email}) => {
	const carsimgs = require('./resources/' + name + '_body_icon.webp');
	return (
		<div className="tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="cars" src={carsimgs	} height="250" width="250"/>
			<div>
				<h2 className="gold">{name}</h2>
			</div>
		</div>		
	);
}

export default Card;

/*
class Card extends Component {
	render() {
		return (
		<div>
			<img alt="cars" src="" />
			<div>
				<h2>Octane</h2>
				<p>Octane@gmail.com</p>
			</div>
		</div>		
		);
	}
}
*/