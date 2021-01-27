import React from 'react';
import { Nav, Image } from 'react-bootstrap';
import "./NavBar.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

class LoggedOutNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Nav className="navbar-header">
                <div className="left-header-section">
                    <p className="logo">Juvé</p>
                    <Link to="/" className="mt-2 navbar-labels left-label"> <FontAwesomeIcon icon={faHome }/> Home </Link>
                </div>
                <div className="right-header-section">
                    <Link to="/login" className="navbar-labels"> <FontAwesomeIcon icon={faUser}/> Login </Link>
                    <Link to="/signup" className="navbar-labels"> <FontAwesomeIcon icon={faUserPlus}/> Sign Up</Link>
                </div>
            </Nav>
        )
    }
}

export default LoggedOutNavBar; 