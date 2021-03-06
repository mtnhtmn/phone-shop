import React from 'react';
import {connect} from "react-redux";
import {CssBaseline} from "@material-ui/core";
import {initFirebase, onAuthStateChanged} from "./services/firebaseService";
import {getLoggedInUserData} from "./store/actions/authActions";
import MainRouter from "./router/MainRouter";

initFirebase()

const App = (props) => {
    const {getLoggedInUserData} = props;

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        onAuthStateChanged((user) => {
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


