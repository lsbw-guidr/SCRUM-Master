import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginView from './views/LoginView'

import './App.css';

class App extends Component {

  componentWillReceiveProps = newProps => {
    if(newProps.isLoggedIn !== this.props.isLoggedIn){
      this.props.history.push('/user');
    }
  }
  // Redirects if user is already logged in
  // componentDidMount(){
  //   console.log(this.props.history.location.pathname);
  //   if(localStorage.getItem('uuid') !== null && this.props.history.location.pathname === '/login'){
  //     this.props.history.push('/user');
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Route path='/login' component={LoginView} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})


export default withRouter(connect(mapStateToProps, {})(App));
