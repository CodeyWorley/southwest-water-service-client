import React from "react";
import {withRouter} from "react-router-dom";

const Nav = props => {
    let token = localStorage.getItem("swwsToken");
    let navRight;

    if(token) {
        navRight = (
            <li>
                <button
                    className="btn-logout"
                    onClick={() => logoutUser()}>
                    Logout
                </button>
            </li>
        )
    }

    const logoutUser = async () => {
        await localStorage.removeItem("swwsToken");
        props.history.push("/dashboard/login");
    };

    return (
        <React.Fragment>
            <nav>
                <ul class="nav-container">
                    <li>Southwest Water Service</li>
                    {navRight}
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default withRouter(Nav);