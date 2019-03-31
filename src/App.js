import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav";
import LandingPage from "./components/landing-page";
import DashboardPage from './components/dashboard-page';
import DashboardLoginPage from './components/dashboard-login-page'
import Footer from "./components/footer";
import ErrorPage from "./components/error-page";

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Nav />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/dashboard' component={DashboardPage} />
                    <Route exact path='/dashboard/login' component={DashboardLoginPage} />

                    <Route component={ErrorPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
