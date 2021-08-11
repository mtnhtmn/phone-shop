import React from 'react';
import {Container, Grid} from "@material-ui/core";
import LoginForm from "./LoginForm";


const LoginPage = () => {
    return (
        <Container>
            <Grid container
                  spacing={0}
                  direction={"column"}
                  alignItems={'center'}
                  justifyContent={'center'}
                  style={{minHeight: '100vh'}}>
                <Grid item xs={3}>
                    <LoginForm/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LoginPage;
