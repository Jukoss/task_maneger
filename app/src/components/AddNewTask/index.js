import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import ImageUploader from 'react-images-upload';

import './_index.scss';
import Input from '../UIKit/Input';
import Button from '../UIKit/Button';
import Textarea from '../UIKit/Textarea';
import Select from '../UIKit/Select';

// import projects from '../../projects';

class AddNewTask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: {
        project: 'Project One',
        status: 'New',
        priority: 'Normal'
      },
      projects: ['Project One', 'Project Second'],
      fireRedirect: false,
      pictures: {}
    }

    this.onDrop = this.onDrop.bind(this);
    
  }

  onDrop(picture) {
    this.setState({
        pictures: picture[0],
    });
}

  handleInput = (e) => {

		const field = e.target.name;
		const task = this.state.task;
    task[field] = e.target.value;
		this.setState(state => ({
			...state,
			task
    }));
    
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);

    let newTask = {};


    newTask = this.state.task;
    newTask.id = +(new Date()); 
    newTask.pictures = this.state.pictures; 
    

    fetch('/new', {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask)
    });

    console.log(newTask);

    this.setState({ fireRedirect: true })
    
  }


  

  render() {
    const { projects } = this.props;

   
    
    return (
      <div className="main">


      <form onSubmit={this.handleSubmit}>
        <div className="new-task-wrp">
          <div className="img-wrp">
            <div className="img">
              <ImageUploader
                withIcon={true}
                onChange={this.onDrop}
                buttonText=''
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                label=""
              />
            </div>

            <Select 
              type="text" 
              placeholder="Yout Project" 
              name="project"
              value={this.state.task.project || ''}
              onChange={this.handleInput}
              cssClass="project"
              options={ this.state.projects }
            />

          
          </div>

          <div className="info-wrp">
            <Input 
              type="text" 
              placeholder="Name" 
              name="name"
              value={this.state.task.name || ''}
              onChange={this.handleInput}
            />

            <Textarea 
              name="description" 
              placeholder="Description ..." 
              value={this.state.task.description || ''}
              onChange={this.handleInput}
            />

            <div className="past-form">
            <Input 
              type="text" 
              placeholder="Status" 
              name="status"
              value={this.state.task.status}
              onChange={this.handleInput}
              disabled="disabled"
            />

            <Select 
              type="text" 
              placeholder="Priority" 
              name="priority"
              value={this.state.task.priority || ''}
              onChange={this.handleInput}
              options={["High", "Low", "Normal"]}
            />
            </div>
            <div className="past-form">
              <Select 
                type="text" 
                placeholder="Assignee" 
                name="assignee"
                value={this.state.task.assignee || ''}
                onChange={this.handleInput}
                options={["Tony Stark", "Jon Snow", "Brian O'Conner"]}
              />
              <Input 
                type="text" 
                placeholder="Estimate" 
                name="estimate"
                value={this.state.task.estimate || ''}
                onChange={this.handleInput}
              />
  
            </div>

            <Button label="Save" />

          </div>
        </div>
      </form>

      {this.state.fireRedirect && (
          <Redirect to={'/'}/>
        )}
          
 
    </div>
      
    );
  }
}

export default AddNewTask;
