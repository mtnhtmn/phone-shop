import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { doLogout } from "../../store/actions/authActions";
import { connect, useDispatch, useSelector } from "react-redux";
import CartModal from "../cart/CartModal";
import { userSelector } from "../../store/selectors/authSelector";

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

/* 
    In you app you use functional components
    but you use everywhere the connect function with mapStateToProps
    there is no problem with that but its a more class components approach
    in functional components as you know we have hooks
    and also react-redux provides us hooks.
    i commented it here because its a convenient component to show example of how to use redux hooks

    using hooks with redux its a more modern approach at everyone migrating the old redux approach
    to this one

    i suggest you take your other components that use redux and try to use hooks instead of connect
    https://react-redux.js.org/api/hooks
*/
const Appbar = (props) => {
  // no need for props
  //   const { user, title } = props;

  // This are selector. the work almost the same as the connect function
  // pass to the useSelector a function that gets your store and the you return what ever you want
  // BTW
  // useSelector(userSelector) === useSelector(state => state.authReducer.user)
  const user = useSelector(userSelector);
  const { title } = useSelector((state) => state.uiReducer);

  // the dispatch function is a replace for using mapDispatchToProps
  const dispatch = useDispatch();

  const handleClickSignOut = () => {
    // doLogout();
    //then you pass to the dispatch the action that you want to invoke
    // same as you do inside your action functions with redux-thunk
    dispatch(doLogout());
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button color={"inherit"}>
            {user.firstName} {user.lastName}
          </Button>
          <CartModal />
          <Button onClick={() => handleClickSignOut("/login")} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// we remove the mappers functions
// const mapDispatchToProps = (dispatch) => {
//     return {
//         doLogout: () => dispatch(doLogout())
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         user: state.authReducer.user,
//         title: state.uiReducer.title,
//     }
// }

// we remove the connect function
export default Appbar;
