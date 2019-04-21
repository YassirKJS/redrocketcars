/*
  child component to App.js
  after introducing searchChange in App.js, now I have searchChange here
*/

import React from 'react';

const Searchbox = ({ searchfield, searchChange}) => {
	return (
		<div>
			<input 
        type="search"
        placeholder="search" 
        className="pa3 ba b--washed-yellow bg-lightest-blue"
        onChange={searchChange}
      />
		</div>
	);
}

export default Searchbox;