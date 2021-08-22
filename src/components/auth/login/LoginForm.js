import React from 'react';
import {Button, FormControl, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import {Formik, Form} from "formik";
import {connect} from "react-redux";
import {doLogin} from "../../../store/actions/authActions";
import {Link} from 'react-router-dom'
import AuthError from './AuthError'


const useStyles = makeStyles(theme => ({
    paper: {
        width:400,
        padding: 20
    },
    register: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    }

}))

const LoginForm = (props) => {
    const {authError} = props
    const classes = useStyles()

    return (

        <Paper className={classes.paper}>
            <Typography variant={'h4'}>
                Phone Shop
            </Typography>
            <Formik initialValues={{
                email: '',
                password: '',
            }} onSubmit={(values) => {
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
                            fullWidth
                            margin='normal'
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
                            fullWidth
                            margin='normal'
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
                        <FormControl margin='normal'>
                            <Button type={'submit'} color={'primary'} variant={'contained'}>
                                Login
                            </Button>
                        </FormControl>


                        {authError ?
                            <FormControl fullWidth margin='normal'>
                                <AuthError authError={authError}/>
                            </FormControl> : null}
                        <FormControl margin='normal' className={classes.register}>
                            <Typography>
                                Dont have an account?
                            </Typography>
                            <Link to={'/register'}>
                                <Button color={'primary'} variant='text'>
                                    Register
                                </Button>
                            </Link>
                        </FormControl>
                    </Form>
                )}
            </Formik>
        </Paper>


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
