import React, { Component } from 'react';
import $ from 'jquery';

export default class App extends Component {
  componentDidMount() {
    $.get('http://localhost:5000/dummy', function(result) {
      this.setState({
        result: result
      });
    }.bind(this));
  }

// https://github.com/rackt/react-router

  render() {
    console.log(this.state);
    return (
      <h1>{this.state}</h1>
    );
  }
}
