import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import LargeCarts from '../LargeCarts';
import Button from '../../../components/UIKit/Button';
// import Modal from 'react-responsive-modal';

import './_index.scss';

class SmallCarts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: this.props
    }

    // this.getAllTasks = this.getAllTasks.bind(this);
  }

  // state = {
  //   open: false,
  // };

  


  // onOpenModal = () => {
  //   this.setState({ open: true });
  //   console.log(state, this.state);
  // };

  // onCloseModal = () => {
  //   this.setState({ open: false });
  // };
  

  getStatusClass = (level) => {
    return level.toLowerCase();
  }

  handleClick = () => {

    this.setState({status: this.state.task.nextStep });

    fetch('/tasks/update', {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.props)
    });

    this.props.update();
     
  }


  render() {
    const {status, level, estimate, title, changeStatus, nextStep, id, update } = this.props;
    return (
      <div className="tasks-small-carts zoomIn" >
        <div className="task-title">
          <span>{title}</span>

        </div>
        <div className="helper-move">
          <Button typeButton="move" label={`${nextStep}`} onClick={this.handleClick}/>   
        </div>
        <ul>
          <li className={`status status-${this.getStatusClass(level) || ''}`}>{level}</li>
          <li>{estimate}</li>
        </ul>
        {/* <Modal open={this.state.open} onClose={this.onCloseModal} little>
          <div className="task-title"><span>{title}</span></div>
        </Modal> */}
      </div> 
    );
  }
}

export default SmallCarts;
