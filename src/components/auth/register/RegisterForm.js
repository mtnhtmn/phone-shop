import React from "react";
import {
  Button,
  FormControl,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { doRegister } from "../../../store/actions/authActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    padding: 20,
  },
}));

const RegisterForm = (props) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant={"h4"}>Register</Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
        }}
        onSubmit={(values) => {
          props.doRegister(values);
          /* 
          shouldn't you push history to login only if register was successful? 
          I suggest you pass a callback to the doRegister 
          that inside the callback you will do the history push
          example: 
            const registerSuccessCallback = () => {
                history.push("/login");
            }

            props.doRegister(values,registerSuccessCallback);
          */
          history.push("/login");
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
          }
          if (values.confirmPassword !== values.password) {
            errors.password = "Password not matched";
            errors.confirmPassword = "Password not matched";
          }
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
        }}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form style={{ width: "100%" }}>
            <TextField
              fullWidth
              margin="normal"
              value={values.email}
              type={"email"}
              name={"email"}
              errors={errors}
              touched={touched}
              onChange={handleChange}
              onBlur={handleBlur}
              variant={"filled"}
              label={"Enter Email Address"}
            />
            <TextField
              fullWidth
              margin="normal"
              value={values.password}
              type={"password"}
              name={"password"}
              errors={errors}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              variant={"filled"}
              label={"Enter Password"}
            />
            <TextField
              fullWidth
              margin="normal"
              value={values.confirmPassword}
              type={"password"}
              name={"confirmPassword"}
              errors={errors}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              variant={"filled"}
              label={"Confirm Password"}
            />
            <TextField
              fullWidth
              margin="normal"
              value={values.firstName}
              type={"text"}
              name={"firstName"}
              errors={errors}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              variant={"filled"}
              label={"Enter First Name"}
            />
            <TextField
              fullWidth
              margin="normal"
              value={values.lastName}
              type={"text"}
              name={"lastName"}
              errors={errors}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              variant={"filled"}
              label={"Enter Last Name"}
            />
            <FormControl margin="normal">
              <Button type={"submit"} color={"primary"} variant={"contained"}>
                Register
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.authReducer.authError,
  };
};

export default connect(mapStateToProps, { doRegister })(RegisterForm);
