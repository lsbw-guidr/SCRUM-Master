import axios from 'axios'

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const HANDLE_REGISTER_CHANGES = 'HANDLE_REGISTER_CHANGES';
export const HANDLE_LOGIN_CHANGES = 'HANDLE_LOGIN_CHANGES';
export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const FETCHING_TRIPS = 'FETCHING_TRIPS';
export const TRIPS_FETCHED = 'TRIPS_FETCHED';

const baseURL = 'http://localhost:8000';

export const handleRegisterChanges = e => {
    return { type: HANDLE_REGISTER_CHANGES, payload: e }
}

export const handleLoginChanges = e => {
    return { type: HANDLE_LOGIN_CHANGES, payload: e }
}

export const registerUser = (name, username, password) => dispatch => {
    dispatch({ type: REGISTER_USER_START})
    axios.post(`${baseURL}/auth/register`, {name: name, username: username, password: password})
    .then(res => dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data}))
    .catch(err => dispatch({ type: REGISTER_USER_FAIL, payload: err}))
}

export const loginUser = (username, password) => dispatch => {
    dispatch( {type: LOGIN_USER_START })
    axios.post(`${baseURL}/auth/login`, {username: username, password: password})
    .then(res => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data })
        localStorage.setItem("jwt", `${res.data.token}`);
        localStorage.setItem("uuid", `${res.data.user.id}`);
        console.log(res.data);
    })
    .catch(err => dispatch({ type: LOGIN_USER_FAIL, payload: err }))
}

export const fetchAllTrips = (id) => dispatch => {
    const token = localStorage.getItem('jwt');

    const options = {
        headers: {
            Authorization: token,
        }
    }
    
    dispatch({type: FETCHING_TRIPS})

    axios.get(`${baseURL}/user/trips/${id}/all`, options)
    .then(res => {
        dispatch({type: TRIPS_FETCHED, payload: res.data});
        console.log("res.data", res.data);
    })
    .catch(err => {
        console.log(err);
    })
}