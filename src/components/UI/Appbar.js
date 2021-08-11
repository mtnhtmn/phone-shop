import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {doLogout} from "../../store/actions/authActions";
import {connect} from "react-redux";
import CartModal from './CartModal'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const ButtonAppBar = (props) => {
    const {user} = props
    const handleClickSignOut = () => {
        props.doLogout()
    }
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color={'inherit'} >
                        {user.firstName} {user.lastName}
                    </Button>
                    <CartModal/>
                    <Button onClick={() => handleClickSignOut('/login')} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => dispatch(doLogout())
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar)