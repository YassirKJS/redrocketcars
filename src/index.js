import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { cars } from './cars'

ReactDOM.render(
	<div>
		<Card id={cars[0].id} name={cars[0].name} email={cars[0].email}/>
		<Card id={cars[1].id} name={cars[1].name} email={cars[1].email}/>
		<Card id={cars[2].id} name={cars[2].name} email={cars[2].email}/>
		<Card id={cars[3].id} name={cars[3].name} email={cars[3].email}/>
	</div>	
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
