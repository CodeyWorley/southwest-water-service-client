import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./components/views/landing-page";
import DashboardPage from './components/views/dashboard-page';
import DashboardLoginPage from './components/views/dashboard-login-page';
import ErrorPage from "./components/views/error-page";

import Nav from "./components/nav";
import Footer from "./components/footer";


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
