import React from 'react';
import { Nav, Image } from 'react-bootstrap';
import "./NavBar.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPollH, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class LoggedInNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Nav className="navbar-header">
                <div className="left-header-section">
                    <p className="logo">Juvé</p>
                    <Link to="/" className="mt-2 navbar-labels"> <FontAwesomeIcon icon={faHome }/> Home </Link>
                </div>
                <div className="right-header-section">
                    <Link to="/profile" className="navbar-labels"> <FontAwesomeIcon icon={faUser}/> My Profile </Link>
                    <Link to="/survey" className="navbar-labels"> <FontAwesomeIcon icon={faPollH}/> My Survey </Link>
                    <Link to="/dashboard" className="navbar-labels"> <FontAwesomeIcon icon={faPollH}/> Dashboard </Link>
                    <Link to="/home" className="navbar-labels"> <FontAwesomeIcon icon={faSignOutAlt}/> Logout </Link>
                </div>
            </Nav>
        )
    }
}

export default LoggedInNavBar; 