import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
    return(
      <article>
        <h1>About page</h1>
        <Link to="/" className="any-btn">Home</Link>
      </article>
    );
  }
}
