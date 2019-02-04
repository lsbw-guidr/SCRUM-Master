import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    HANDLE_REGISTER_CHANGES,
    HANDLE_LOGIN_CHANGES,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions'

const initialState = {
    isRegistering: false,
    isLoggingIn: false,
    newUser: {
        name: '',
        username: '',
        pw1: '',
        pw2: ''
    },
    user: {
        username: '',
        password: ''
    },
    token: '',
    isLoggedIn: false
};

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case HANDLE_REGISTER_CHANGES:
            return {
                ...state,
                newUser: {
                    ...state.newUser,
                    [action.payload.target.name]: action.payload.target.value
                }
            }
        case HANDLE_LOGIN_CHANGES:
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.payload.target.name]: action.payload.target.value
                }
            }
        case REGISTER_USER_START:
            return {
                ...state,
                isRegistering: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                token: action.payload.token,
                isLoggedIn: true
            }
        case REGISTER_USER_FAIL:
            return {
                ...state,
                isRegistering: false
            }
        case LOGIN_USER_START:
            return {
                ...state,
                isLoggingIn: true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                token: action.payload.token,
                isLoggedIn: true
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isLoggingIn: false
            }
        default: 
            return state
    }
}

export default reducer