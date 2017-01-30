import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  render() {
    return(
      <article>
        <h1>Page not found.</h1>
        <Link to="/" className="any-btn">Home</Link>
      </article>
    );
  }
}
