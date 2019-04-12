import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      students: []
    }
  }

  componentDidMount = () => {
const className = this.props.match.params.class
    axios.get(`http://localhost:3005/students?class=${className}`)
      .then(res => {
        this.setState({
          students: res.data
        })
    })

  }

  render() {
    const classTitle = this.props.match.params.class
    const students = this.state.students.map((student, i) => { 
      return (
        <div key={i}>
          <Link to={`/${classTitle}/${student.id}`}><h3>{student.first_name}</h3></Link> 
        </div>
      )
    })
    return (
      <div className="box">
        <h1>{classTitle}</h1>
        <h2>ClassList: {students}</h2>

      </div>
    )
  }
}