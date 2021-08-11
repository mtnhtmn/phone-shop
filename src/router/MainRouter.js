import React from 'react';
import {connect} from "react-redux";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const MainRouter = (props) => {
    if(props.user){
        return <PrivateRouter/>
    }
    else{
        return <PublicRouter/>
    }

};
const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user
    }

}
export default connect(mapStateToProps)(MainRouter);


