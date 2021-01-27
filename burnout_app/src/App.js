import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import ProfilePage from './components/pages/ProfilePage'
import SurveyPage from './components/pages/SurveyPage';
import HomePage from './components/pages/Homepage'
import HomePageLooged from './components/pages/LoggedHomepage'
import FormSignup from './components/modals/Signup';
import  FormLogin from './components/modals/Login';
import UserContext from './components/UserContext'
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
                <HomePage />
            </Route>
            <Route exact path="/myhome">
                <HomePageLooged />
            </Route>
            <Route path="/profile">
                <ProfilePage />
            </Route>
            <Route path="/survey">
                <SurveyPage />
            </Route>
            <Route path="/signup">
                <FormSignup />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            
            <Route path="/login">
                < FormLogin />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

//Google doc
//https://docs.google.com/document/d/1JXOlLcGlsNtwbuxceLoIwGLdJDlc46RD2D4g7PrzLyc/edit

//Zoom - Fullstack
//https://us02web.zoom.us/j/4132193240?pwd=VlpVdVpxMDQwQzZJcVo0RXJETFVQQT09

//Google meet
//https://meet.google.com/yqo-kika-huk?pli=1&authuser=1

//Liveshare
//https://prod.liveshare.vsengsaas.visualstudio.com/join?84B56180F1628F9AD5C99C5ABA91BE734EE1

//Github repo
//https://github.com/choukroun-gabriel/hackathon_itc_2020
