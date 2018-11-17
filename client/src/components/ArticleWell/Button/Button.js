import React from 'react';

const button = (props) => (
  <button className="btn btn-warning mr-3" onClick={props.clicked}>{props.title}</button>
);

export default button;