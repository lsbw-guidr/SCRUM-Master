// import React from 'react';
// import Login from '../components/Login/Login';
// import { connect } from 'react-redux'

// import { 
//     registerUser, 
//     handleRegisterChanges,
//     handleLoginChanges,
//     loginUser
// } from '../actions'

// class LoginView extends React.Component {
//     handleRegisterChanges = e => {
//         this.props.handleRegisterChanges(e)
//     }

//     handleLoginChanges = e => {
//         this.props.handleLoginChanges(e)
//     }

//     handleRegister = (e, name, username, pw1, pw2) => {
//         e.preventDefault();
//         if (pw1 === pw2) {
//             this.props.registerUser(name, username, pw1)
//         } else {
//             alert('Passwords do not match!')
//         }
//     }

//     handleLogin = (e, username, password) => {
//         e.preventDefault();
//         this.props.loginUser(username, password);
//     }

//     render() {

//         return (
//             <Login 
//                 history={this.props.history} 
//                 isRegistering={this.props.isRegistering}
//                 handleRegister={this.handleRegister}
//                 handleLogin={this.handleLogin}
//                 handleRegisterChanges={this.handleRegisterChanges}
//                 handleLoginChanges={this.handleLoginChanges}
//                 newUser={this.props.newUser}
//                 user={this.props.user}  
//             />
//         );
//     } 
// };

// const mapStateToProps = state => ({
//     isRegistering: state.isRegistering,
//     newUser: state.newUser,
//     user: state.user,
// })

// export default connect(mapStateToProps, { registerUser, handleRegisterChanges, handleLoginChanges, loginUser })(LoginView);