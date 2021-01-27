import React from 'react';
import LoggedInNavBar from '../NavBar/LoggedInNavBar'
import LoggedOutNavBar from '../NavBar/LoggedOutNavBar';
import "./HomePage.css"
import { Image } from 'react-bootstrap';
import Logo from './../../assets/HackathonLogo.png';
import WorkPlaceImage from './../../assets/workplace.png';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
            user: undefined
        }
    }

    render() {
        return (
            <div>
                <LoggedOutNavBar/>
                <div className="app-header">
                    <div>
                        <Image src={Logo} style={{float: "left"}}/>
                        <h2 className="app-title">JUVÉ</h2>
                        <h4 className="app-heading"> Start prioritizing YOU.</h4>
                        <h4 style={{fontSize: "14px"}}> Life can be stressful. Don't let it control you. Predict the stress. Address the Stress. Be Happier.</h4>
                        {this.state.isSignedIn ? 
                            <Link to="/profile" className="action-button">Build My Profile </Link>
                            :
                            <Link to="/signup" className="action-button"> Join Today! </Link>
                        }
                    </div>
                </div>
                <div className="breaking-point">

                </div>
                <div className="info-section">
                    <h2>What is workplace wellness?</h2>
                    <h4 style={{fontSize: "14px"}}> Generally, workplace wellness refers to a work environment conducive to the health and well-being of all employees and others within it.</h4>
                    <div>
                        <Image src={WorkPlaceImage} style={{width: "50%", float: "left"}} />
                        <h2>Why is it important?</h2>
                        <h4 style={{fontSize: "14px"}}>An average employee spends approximately 50 hours of their week at work. That’s about one-third of one’s waking life every year. Furthermore, workers will consume about one-third of all their meals at work.In other words, the workplace is almost like a second home for most of us.</h4>
                    </div>
                    <h2>What is mindfulness?</h2>
                    <h4 style={{fontSize: "14px"}}> Mindfulness is the idea of learning how to be fully present and engaged in the moment, aware of your thoughts and feelings without distraction or judgment.</h4>
                    <h2>What is meditation?</h2>
                    <h4 style={{fontSize: "14px"}}> Meditation is about training in awareness and getting a healthy sense of perspective. You’re not trying to turn off your thoughts or feelings. You’re learning to observe them without judgment. And eventually, you may start to better understand them as well. It isn’t about becoming a different person, a new person, or even a better person. </h4>
                    <h2>Stress</h2>
                    <h4> Life can be stressful. Maybe you’re on a tight deadline at work or you or someone in your family is having health problems — or maybe both are happening at the same time and it feels like you’re juggling 100 things at once. No matter the circumstances, you’re likely wondering how to relieve stress so you can lead a more peaceful and healthy life.
                    When we pile acute stress, caused by specific point-in-time threats or scares, on top of chronic stress, or underlying feelings of anxiety and worry, both our mental and physical states suffer. The American Psychological Association has found that long-term stress affects every system in our bodies.
                    </h4>
                </div>
            </div>
        )
    }
}

export default HomePage; 