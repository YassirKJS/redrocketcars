/*
  Scroll will affect its CHILDREN to render them
*/

import React from 'react';

const Scroll = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default Scroll;