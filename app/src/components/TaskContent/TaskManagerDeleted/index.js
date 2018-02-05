import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectRowDeleted from '../ProjectRowDeleted';



import Button from '../../../components/UIKit/Button';


class TaskManagerDeleted extends Component {

  constructor(props) {
    super(props);
  }

  ProjectRowDeleted(events) {
    // console.log('***> events', events);

    let projects = ["Project One","Project Second"];

    return projects.map((item) => {

      let event = [];
      events.map((i) => {
        if (item == i.project) {
          event.push(i);
        }
      });
        
        return (
          <ProjectRowDeleted key={item}
            title={item}
            tasks={event}
          />
        )
    });
  }


  render() {
    const { events } = this.props;
    return (
      <div className="main">
        {this.ProjectRowDeleted(events)}
        {/* <Button onClick = {this.props.handler} label="update"/> */}
        <div className="add-wrp"><Link to="/new">+</Link></div>
      </div>
    );
  }
}

export default TaskManagerDeleted;
