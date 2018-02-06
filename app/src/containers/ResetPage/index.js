import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import Header from '../../components/Base/Header';
import Footer from '../../components/Base/Footer';
import TaskManager from '../../components/TaskContent/TaskManager';


class Reset extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch('/tasks/reset')
      .then(res => res.json())
      .then(projects => this.setState({ projects }));
  }

  render() {
    return (
      <Fragment>
        <Header/>
          <div className="main">
            <Link to="/">T<span>ask</span>M<span>aneger 0.1.0</span></Link>
          </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default Reset;
