import React, { Component } from 'react';

class LargeCarts extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const { title } = this.props;
    return (
      <div className="tasks-large-carts">
        <div className="task-title"><span>{title}</span></div>
      </div> 
    );
  }
}

export default LargeCarts;
