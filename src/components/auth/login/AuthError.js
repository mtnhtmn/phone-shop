import Alert from '@material-ui/lab/Alert';
import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
    },
}));


const AuthError = ({authError}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Alert severity="error">{authError}</Alert>
        </div>
    );
};

export default AuthError;
