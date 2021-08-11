import {BrowserRouter,Switch,Redirect, Route} from "react-router-dom";
import RegisterPage from "../components/auth/register/RegisterPage";
import LoginPage from "../components/auth/login/LoginPage";

const PublicRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/register'}>
                    <RegisterPage/>
                </Route>
                <Route path={'/login'}>
                    <LoginPage/>
                </Route>
                <Redirect to={'/login'}/>
            </Switch>
        </BrowserRouter>
    );
};

export default PublicRouter;
