import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import ProjectRow from '../ProjectRow';


import Button from '../../../components/UIKit/Button';


class TaskManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }

    // this.getAllTasks = this.getAllTasks.bind(this);

  }

  componentDidMount() {
    this.getAllTasks();
  }

  getAllTasks = () => {
    fetch('/tasks')
    .then(res => res.json())
    .then(tasks => this.setState({ tasks }));

    // console.log(this.state);
  }


  projectRow() {

    let projects = ["Project One", "Project Second"];


    return projects.map((item) => {

      let event = [];
      this.state.tasks.map((i) => {
        if (item === i.project) {
          event.push(i);
        }
      });

      return (
        <ProjectRow key={item}
          title={item}
          tasks={event}
          update={this.getAllTasks}
        />
      )
    });
  }


  render() {
    return (
      <div className="main">
        {this.projectRow()}
        <div className="add-wrp"><Link to="/new">+</Link></div>
      </div>
    );
  }
}

export default TaskManager;
