import React from 'react';
import Button from './Button/Button';

const styles = {
  button: {
    marginRight: '10px'
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  }
};

const well = (props) => (
  <div className="lead" id={props.articleId}>
    <h3 className="my-4">
      <strong>{props.headline}</strong>
    </h3>
    <h5>Website: {props.author}</h5>
    <h5>Date: {props.date}</h5>
    <p> {props.summary}</p>
    <button className="btn btn-warning mr-3" style={styles.button}><a style={styles.link} href={props.URL} target="_blank">Read</a></button>
    <Button title={props.title} clicked={(event) => props.action(event, props.articleId)} />
  </div>
);

export default well;