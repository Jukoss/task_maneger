import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectRowDeleted from '../ProjectRowDeleted';



import Button from '../../../components/UIKit/Button';


class TaskManagerDeleted extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
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

  ProjectRowDeleted() {
    // console.log('***> events', events);

    let projects = ["Project One","Project Second"];

    return projects.map((item) => {

      let event = [];
      this.state.tasks.map((i) => {
        if (item == i.project) {
          event.push(i);
        }
      });
        
        return (
          <ProjectRowDeleted key={item}
            title={item}
            tasks={event}
            update={this.getAllTasks}
          />
        )
    });
  }


  render() {
    const { events } = this.props;
    return (
      <div className="main">
        {this.ProjectRowDeleted()}
        {/* <Button onClick = {this.props.handler} label="update"/> */}
        <div className="add-wrp"><Link to="/new">+</Link></div>
      </div>
    );
  }
}

export default TaskManagerDeleted;
