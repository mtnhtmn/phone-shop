import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    firestore,
    signOut,
} from "../../services/firebaseService";
import {getPendingOrder} from "./ordersActions";


export const doLogin = (user) => {
    return (dispatch) => {
        dispatch({type: 'LOGIN_START'})
        signInWithEmailAndPassword(
            user.email,
            user.password,
        ).then((data) => {
            if(data.user.emailVerified){
                dispatch({type: 'LOGIN_SUCCESS'})
            }
            else{
                dispatch({type: 'EMAIL_NOT_VERIFIED',payload:{err:{message:'email not verified'}}})
            }
        })
        .catch((err) => {
            dispatch({type: 'LOGIN_FAILED',payload:{err}})
        })
    }
}

export const doRegister = (user) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(
            user.email,
            user.password,
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                userInitials: user.firstName[0] + user.lastName[0]
            })
        }).then(() => {
            return sendEmailVerification()
        }).then(() => {
            dispatch({type: 'REGISTER_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'REGISTER_FAILED', err})
        })
    }
}

export const doLogout = () => {
    return (dispatch) => {
        signOut()
        .then(() => {
            dispatch({type: 'LOGOUT_SUCCESS'})
        })
        .catch((err) => {
            dispatch({type: 'LOGOUT_FAILED', err})
        })
    }
}

export const getLoggedInUserData = (userUid) => {
    return (dispatch) => {
        return new Promise((resolve, reject)=>{
            firestore.collection('users').doc(userUid).get().then((doc)=>{
                const user = doc.data()
                dispatch({type: 'SET_LOGGED_IN_USER', payload: {user}})
                dispatch(getPendingOrder(doc.id))
                resolve()
            })
        })
    }
}