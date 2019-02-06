import axios from 'axios'

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const HANDLE_REGISTER_CHANGES = 'HANDLE_REGISTER_CHANGES';
export const HANDLE_LOGIN_CHANGES = 'HANDLE_LOGIN_CHANGES';
export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const FETCHING_ALL_USER_TRIPS = 'FETCHING_ALL_USER_TRIPS';
export const ALL_USER_TRIPS_FETCHED = 'ALL_USER_TRIPS_FETCHED';
export const LOGGING_OUT = 'LOGGING_OUT';
export const LOGGED_OUT = 'LOGGED_OUT';

export const FETCHING_PUBLIC_TRIPS = 'FETCHING_PUBLIC_TRIPS';
export const FETCHED_PUBLIC_TRIPS = 'FETCHED_PUBLIC_TRIPS';

const baseURL = 'http://localhost:8000';

/**************************************************/
// REGISTER, LOGIN, AND LOGOUT MANAGEMENT //
/**************************************************/

export const registerUser = (name, username, password) => dispatch => {
    dispatch({ type: REGISTER_USER_START})
    axios.post(`${baseURL}/auth/register`, {name: name, username: username, password: password})
    .then(res => dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data}))
    .catch(err => dispatch({ type: REGISTER_USER_FAIL, payload: err}))
}

export const loginUser = (user) => dispatch => {
    dispatch( {type: LOGIN_USER_START })
    axios.post(`${baseURL}/auth/login`, user)
    .then(res => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data })
        localStorage.setItem("jwt", `${res.data.token}`);
        localStorage.setItem("uuid", `${res.data.user.id}`);
        console.log(res.data);
    })
    .catch(err => dispatch({ type: LOGIN_USER_FAIL, payload: err }))
}

export const logoutUser = () => {
    return dispatch => {
        dispatch({type: LOGGING_OUT});

        localStorage.removeItem('jwt');
        localStorage.removeItem('uuid');

        dispatch({type: LOGGED_OUT});
    }
}

export const search = (term) => {
    console.log('search');
}

/**************************************************/
// TRIP DATA MANAGEMENT //
//**************************************************/

export const fetchAllUserTrips = (id) => dispatch => {
    const token = localStorage.getItem('jwt');

    const options = {
        headers: {
            Authorization: token,
        }
    }
    
    dispatch({type: FETCHING_ALL_USER_TRIPS})

    axios.get(`${baseURL}/user/trips/${id}/all`, options)
    .then(res => {
        dispatch({type: ALL_USER_TRIPS_FETCHED, payload: res.data});
        console.log("res.data", res.data);
    })
    .catch(err => {
        console.log(err);
    })
}

export const fetchAllPublicTrips = () => {
    return dispatch => {
        dispatch({type: FETCHING_PUBLIC_TRIPS});
        console.log('fetching public trips')
        
        axios.get(`${baseURL}/public/trips/all`)
        .then(res => {
            console.log("public trips", res.data);
            dispatch({type: FETCHED_PUBLIC_TRIPS, payload: res.data});
        })
        .catch(err => {
            console.log(err);
        })


    }
}

/**************************************************/
// USER DATA MANAGEMENT //
/**************************************************/

// TODO

/**************************************************/
// SEARCH DATA MANAGEMENT //
/**************************************************/

// TODO