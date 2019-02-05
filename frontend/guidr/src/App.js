import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginView from './views/LoginView'
import Navigation from './components/Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage';

import './App.css';
import TripList from './components/TripList/TripList';

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
      <div className = 'body-container'>

      <div className = "Nav">
        <Navigation />
        </div>
      
      <div className="App">
        <Route exact path = '/' component = {LandingPage} />
        <Route path='/login' component={LoginView} />
        <Route path = '/triplist' component={TripList} />
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})


export default withRouter(connect(mapStateToProps, {})(App));
