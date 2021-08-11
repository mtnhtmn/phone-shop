const initialState = {
    authError: null,
    emailVerified: null,
    user:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {...state,authError: null}
        case 'LOGIN_SUCCESS':
            console.log('LOGIN_SUCCESS')
            return {
                ...state,
                authError: null,
            }
        case 'LOGIN_FAILED':
            console.log('LOGIN_FAILED')
            return {
                ...state,
                authError: action.payload.err.message,
            }
        case 'EMAIL_NOT_VERIFIED':
            console.log('EMAIL_NOT_VERIFIED')
            return {
                ...state,
                authError: action.payload.err.message,
            }
        case 'REGISTER_SUCCESS':
            console.log('REGISTER_SUCCESS')
            return {
                ...state,
                authError: null,
                emailVerified: null
            }
        case 'REGISTER_FAILED':
            console.log('REGISTER_FAILED')
            return {
                ...state,
                authError: action.err.message,
                emailVerified: null
            }
        case 'SET_LOGGED_IN_USER':
            console.log('SET_LOGGED_IN_USER',action.payload.user)
            return {
                ...state,
                user: action.payload.user,
            }
        case 'LOGOUT_SUCCESS':
            return initialState
        default:
            return state
    }
}

export default authReducer