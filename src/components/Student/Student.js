import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      student: {}
    }

  }

  componentDidMount = () => { 
    const { id } = this.props.match.params
    const className = this.props.match.params.class
    axios.get(`http://localhost:3005/students?class=${className}`)
      .then(res => {
        this.setState({
          student: res.data.filter(student => student.id == id )[0]
        })
      })
      
    }

  render() {
    const student = (
      <div>
        <h1>{this.state.student.first_name} {this.state.student.last_name}</h1>
        <h2>Grade: {this.state.student.grade}</h2>
        <h2>Email: {this.state.student.email}</h2>
      </div>
    )
    return (
      <div className="box">
        <h1>Student: {this.state.student.first_name ? this.state.student.first_name : null}</h1>
        {this.state.student.first_name ? student : <h1>Loading...</h1>}
      </div>
    )
  }
}