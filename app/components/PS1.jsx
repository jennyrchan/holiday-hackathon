import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {Link, browserHistory} from 'react-router';

export default class PS extends Component {
  constructor(props){
    super(props)
    this.state = {};

  }

  render() {

    return (
      <div>
        <h1>Toy Deploy</h1>
        <h2>Toy name</h2>
        <Button type="submit">Purchase Item</Button>
      </div>
    )
  }
}
