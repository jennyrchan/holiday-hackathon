import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {Link, browserHistory} from 'react-router';

export default class SchoolWishList extends Component {
  constructor(props){
    super(props)
    this.state = {schools: []}

  }
  componentDidMount() {
    return axios.get('/api/schools')
    .then(res => res.data)
    .then( (schoolList) => {
      console.log(schoolList)
      this.setState({schools: schoolList})
    }
    )}

  changePage() {
    browserHistory.push('/PS1')
  }

  render() {
    if (!this.state) { return null }

    return (
      <div>
        <h1>Toy Deploy</h1>
          <h2>Select a school</h2>
          {this.state.schools.map(school => (
              <li>{school.name}
              <Button type="submit" onClick= {() => this.changePage}>Select School</Button>
              </li>
          )
        )}
      </div>
    )
  }
}
