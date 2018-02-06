import React, { Component } from 'react';

import SmallCarts from '../SmallCarts';

class ProjectRowDeleted extends Component {

  constructor(props) {
    super(props);

    
  }


  deleteTasks(tasks) {
    // console.log('***> tasks', tasks) ;
    let count = 0

    return tasks.map((i) => {
      if(i.status === 'Delete') {
        count++;
        return (
          <SmallCarts key={i.id}
            onClick={''}
            title={i.name}
            level={i.priority}
            estimate={i.estimate}
            nextStep="New"
            id={i.id}
            status={i.status}
            update = {this.props.update}
          />
        )
      } 
    });
    
  }



  render() {
    const { title, tasks } = this.props;
    return (
      <div className="task-row">
      <div className="column column-task">
        <div className="task-title"><span>{title}</span></div>
      </div>

      {/* deleted */}
      <div className={`column column-new`}>
        {this.deleteTasks(tasks)} 
      </div>

    </div>
    );
  }
}

export default ProjectRowDeleted;
