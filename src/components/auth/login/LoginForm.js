import React from 'react';
import {Button, Container, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import {Formik, Form} from "formik";
import {connect} from "react-redux";
import {doLogin} from "../../../store/actions/authActions";
import {Link} from 'react-router-dom'
import AuthError from './AuthError'


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
        margin:  'auto'
    }

}))

const LoginForm = (props) => {
    const {authError} = props
    const classes = useStyles()

    return (
        <Container fixed>
            <Paper className={classes.paper}>
                <Typography variant={'h4'}>
                    Phone Shop
                </Typography>
                <Formik initialValues={{
                    email: '',
                    password: '',
                }} onSubmit={(values) => {
                    console.log(values)
                    props.doLogin(values)
                }}
                        validate={(values) => {
                            const errors = {}
                            if (!values.email) {
                                errors.email = 'Required'
                            }
                            if (!values.password) {
                                errors.password = 'Required'
                            }
                        }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleBlur,
                          handleChange,
                      }) => (
                        <Form style={{width: "100%"}}>
                            <TextField
                                style={{marginBottom: '20px', width: "100%"}}
                                value={values.email}
                                type={'email'}
                                name={'email'}
                                errors={errors}
                                touched={touched}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant={"filled"}
                                label={'Enter Email Address'}
                            />
                            <TextField
                                style={{marginBottom: '20px', width: "100%"}}
                                value={values.password}
                                type={'password'}
                                name={'password'}
                                errors={errors}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                touched={touched}
                                variant={"filled"}
                                label={'Enter Password'}
                            />
                            <Button type={'submit'} color={'primary'} variant={'contained'} >
                                Login
                            </Button>
                            {authError ? <AuthError authError={authError}/> : null}
                            <Typography>
                                Dont have an account?
                            </Typography>
                            <Link to={'/register'}>
                                <Button color={'primary'} variant={'contained'}>
                                    Register
                                </Button>
                            </Link>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Container>


    );
};

const mapDispatchToProps = (dispatch) => {

    return {
        doLogin: (user) => dispatch(doLogin(user))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.authReducer.authError,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
