import React from 'react';
import {connect} from "react-redux";
import {CssBaseline} from "@material-ui/core";
import {initFirebase, onAuthStateChanged} from "./services/firebaseService";
import {getLoggedInUserData} from "./store/actions/authActions";
import MainRouter from "./router/MainRouter";

/* 
 you probably received this error few times on your development process
 this is because you init firebase in a function
 and every time you will make changes in your code 
 react's hot reload functionality will reload you app 
 and the initFirebase function will run again but 
 you already initialled firebase and this is why you get the error

 try to initialize it inline
 and not in a functions 

 firebase.initializeApp(firebaseConfig);
 export const firestore = firebase.firestore();

 and then it will be even esier for you to use firestore 
 becouse vscode will recondize the type of firestore
 and will autocomplete for you all the function like 
 collection, app etc.
*/
initFirebase()

const App = (props) => {
    const {getLoggedInUserData} = props;

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        onAuthStateChanged((user) => {
            /* 
                maybe you want here to  setLoading(true)
                to indicate to the user that something is happening?
                and instead of returning null in the JSX you return <CircularProgress /> from material ui
            */
            if (user && user.emailVerified) {
                getLoggedInUserData(user.uid).then(()=>{
                    setLoading(false)
                })
            }
            else{
                setLoading(false)
            }
        })
    }, [getLoggedInUserData])
    return (
        <>
            <CssBaseline/>
            {loading ? null : <MainRouter/>}
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user
    }

}
export default connect(mapStateToProps, {getLoggedInUserData})(App);


