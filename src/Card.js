import React from 'react';

const Card = ({id, name, email}) => {
	return (
		<div className="tc bg-orange dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="cars" src={'https://robohash.org/' + id +'?200x200'} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
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