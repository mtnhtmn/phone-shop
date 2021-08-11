import React from 'react';
import {Button, Container, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import {Formik, Form} from "formik";
import {connect} from "react-redux";
import {doRegister} from "../../../store/actions/authActions";
import {useHistory} from "react-router";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
        margin:  'auto'
    }

}))

const RegisterForm = (props) => {
    const history = useHistory()
    const classes = useStyles()

    return (
        <Container fixed>
            <Paper className={classes.paper}>
                <Typography variant={'h4'}>
                    Register
                </Typography>
                <Formik initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    firstName: '',
                    lastName: '',
                }} onSubmit={(values) => {
                    props.doRegister(values)
                    history.push('/login')
                }}
                        validate={(values) => {
                            const errors = {}
                            if (!values.email) {
                                errors.email = 'Required'
                            }
                            if (!values.password) {
                                errors.password = 'Required'
                            }
                            if (!values.confirmPassword) {
                                errors.confirmPassword = 'Required'
                            }
                            if (values.confirmPassword !== values.password) {
                                errors.password = 'Password not matched'
                                errors.confirmPassword = 'Password not matched'
                            }
                            if (!values.firstName) {
                                errors.firstName = 'Required'
                            }
                            if (!values.lastName) {
                                errors.lastName = 'Required'
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
                            <TextField
                                style={{marginBottom: '20px', width: "100%"}}
                                value={values.confirmPassword}
                                type={'password'}
                                name={'confirmPassword'}
                                errors={errors}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                touched={touched}
                                variant={"filled"}
                                label={'Confirm Password'}
                            />
                            <TextField
                                style={{marginBottom: '20px', width: "100%"}}
                                value={values.firstName}
                                type={'text'}
                                name={'firstName'}
                                errors={errors}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                touched={touched}
                                variant={"filled"}
                                label={'Enter First Name'}
                            />
                            <TextField
                                style={{marginBottom: '20px', width: "100%"}}
                                value={values.lastName}
                                type={'text'}
                                name={'lastName'}
                                errors={errors}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                touched={touched}
                                variant={"filled"}
                                label={'Enter Last Name'}
                            />
                            <Button type={'submit'} color={'primary'} variant={'contained'} >
                                Register
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Container>


    );
};

const mapDispatchToProps = (dispatch) => {

    return {
        doRegister: (user) => dispatch(doRegister(user))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.authReducer.authError,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm);
