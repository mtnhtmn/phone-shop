import React from 'react';
import RegisterForm from "./RegisterForm";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => {
    return {
        root: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
        }
    }
})


const LoginPage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <RegisterForm/>
        </div>
    );
};

export default LoginPage;
