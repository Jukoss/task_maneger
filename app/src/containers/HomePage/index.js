import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import Header from '../../components/Base/Header';
import Footer from '../../components/Base/Footer';
import TaskManager from '../../components/TaskContent/TaskManager';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }

    // this.componentDidMount =  this.componentDidMount()
  }

  componentDidMount() {
    fetch('/tasks')
      .then(res => res.json())
      .then(projects => this.setState({ projects }));
      // console.log("up");
  }

  // updateState() {
  //     console.log("ups")
  // }

  render() {
    return (
      <Fragment>
        <Header/>
        <TaskManager/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Home;
