import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return(
      <article>
        <h1>It is home page.</h1>
        <Link className="any-btn" to="/">Home</Link>
      </article>
    );
  }
}
