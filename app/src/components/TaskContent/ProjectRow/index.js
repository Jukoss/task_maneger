import React, { Component } from 'react';

import SmallCarts from '../SmallCarts';

import Button from '../../../components/UIKit/Button';

class ProjectRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }

    console.log('***> tasks', this.state);
    
  }

  componentWillMount () {
    this.setState((state) => ({
      ...state,
      ['tasks'] : this.props.tasks
    }))
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps');
    if (this.props.tasks != nextProps.tasks) {
      this.setState((state) => ({
        ...state,
        ['tasks'] : this.props.tasks
      }))
    }
  }

  shouldComponentUpdate (nextProps) {
    return this.props != nextProps
  }

  // handleClick () {
  //   console.log(this.state); 
    
  //   this.setState({status: this.state.task.nextStep });

  //   fetch('/tasks/update', {  
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(this.props)
  //   });

  //   console.log(this.state); 
     
  // }


  newTasks() {
   

      const tasks = this.props.tasks;


      // this.setState(state => ({
      //   ...state,
      //   tasks
      // }));


  
      return tasks.map((i) => {
        if(i.status === 'New') {
          return (
            <SmallCarts key={i.id}
              onClick={''}
              title={i.name}
              level={i.priority}
              estimate={i.estimate}
              nextStep="Inprogress"
              id={i.id}
              status={i.status}
              update = {this.props.update}
            />
          )
        } 
      });
    
    
  }
  inprogressTasks(tasks) {
  
    return tasks.map((i) => {
      if(i.status === 'Inprogress') {
        return (
          <SmallCarts key={i.id}
            title={i.name}
            level={i.priority}
            estimate={i.estimate}
            nextStep="Done"
            id={i.id}
            status={i.status}
            update = {this.props.update}
          />
        )
      } 
    });
  }
  doneTasks(tasks) {
    // console.log('***> tasks', tasks) 
    return tasks.map((i) => {
      if(i.status === 'Done') {
        return (
          <SmallCarts key={i.id}
            title={i.name}
            level={i.priority}
            estimate={i.estimate}
            nextStep="Delete"
            id={i.id}
            status={i.status} 
            update = {this.props.update}
            />
        )
      } 
    });
  }


  hideRow (task) {

    let visible = "";

    task.map((i) => {
      // console.log(i.status)
      if (i.status != 'New' || i.staus != 'Inprogress' || i.staus != 'Done') {
        visible = "";
        console.log(i.status);
      } 
      else {
        visible = "";
       
      }
    });

    return visible;
  }

  render() {
    console.log('PROPSIKU', this.props);
    console.log('STAITUK', this.state);
    const { title, tasks, update } = this.props;
    return (
      // <div className={`task-row ${this.hideRow(tasks)}`}>
      <div className={`task-row`}>
      <div className="column column-task">
        <div className="task-title"><span>{title}</span></div>
      </div>

      {/* new */}
      <div className={`column column-new`}>
        {this.newTasks()} 
      </div>

      {/* inprogress */}
      <div className={`column column-inprogress`}>
        {this.inprogressTasks(tasks)} 
      </div>

      {/* done */}
      <div className={`column column-done`}>
        {this.doneTasks(tasks)} 
      </div>
    </div>
   
    );

 
  }
}

export default ProjectRow;
