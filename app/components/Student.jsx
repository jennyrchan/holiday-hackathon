import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {

  constructor(props) {
    super(props);
    this.state = {
      student: {},
      toy: {},
      toys: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/students/${this.props.params.studentId}`)
    .then(res => res.data)
    .then(studentAndToy => {
      this.setState({
        student: studentAndToy[0],
        toy: studentAndToy[1]
      })
    });

    axios.get('/api/toys')
    .then(res => res.data)
    .then(toys => {
      this.setState({
        toys: toys
      })
    })
  }

  handleSubmit() {
    axios.post(`/api/students/${this.props.params.studentId}`, {toy_id: this.state.toy.id})
    .then(() => console.log('POSTED'))
  }

  handleChange(event) {
    console.log('EVENT', event.target.value);

    axios.get(`/api/toys/${event.target.value}`)
    .then(res => res.data)
    .then(toy => {
      this.setState({
        toy: toy
      })
    })

  }

  render() {
    console.log("STATE AND PROPS", this.state, this.props);

    const {student, toy, toys} = this.state;

    return (
      <div>
        <h1>{student.name}</h1>
        <div>
          {(toy)
            ? <div>
                <img src={toy.image} />
                <button href="#" className="btn btn-danger btn-lg"><span className="glyphicon glyphicon-remove-sign"></span> Remove Toy</button>
              </div>
            : <div className="well">
                <form className="form-horizontal" name="toySelect" onSubmit={this.handleSubmit}>
                  <fieldset>
                    <legend>Add to Wishlist</legend>
                    <div className="form-group">
                      <div className="col-xs-10">
                        <select
                          className="form-control"
                          name="toy"
                          required
                          onChange={this.handleChange}>
                          {
                            toys && toys.map(toy => (
                              <option key={toy.id} value={toy.id}>{toy.name}</option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-10 col-xs-offset-2">
                        <button type="submit" className="btn btn-success">Add Toy</button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
          }
        </div>
      </div>
    )
  }
}
