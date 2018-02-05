import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from '../../components/Base/Header';
import Footer from '../../components/Base/Footer';
import AddNewTask from '../../components/AddNewTask';


class NewTask extends Component {


  // state = {titles: []}
  
  //   componentDidMount() {
  //     fetch('/new')
  //       .then(res => res.json())
  //       .then(titles => this.setState({ titles })); 
  //   }
    

  render() {
    return (
      <Fragment>
        <Header/>
        {/* <AddNewTask projects={this.state.titles}/> */}
        <AddNewTask/>
        <Footer/>
      </Fragment>
    );
  }
}

export default NewTask;
