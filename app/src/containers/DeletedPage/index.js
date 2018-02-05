import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import Header from '../../components/Base/Header';
import Footer from '../../components/Base/Footer';
import TaskManagerDeleted from '../../components/TaskContent/TaskManagerDeleted';


class Reset extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch('/tasks')
      .then(res => res.json())
      .then(projects => this.setState({ projects }));
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <TaskManagerDeleted events={this.state.projects}/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Reset;
