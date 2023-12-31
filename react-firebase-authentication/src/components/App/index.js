import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Routes,
    } from 'react-router-dom';

import Navigation from '../../components/Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
    <Navigation/>
    <hr/>
    <Routes>
    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage}/>
    <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
    <Route exact path={ROUTES.HOME} component={HomePage}/>
    <Route exact path={ROUTES.ACCOUNT} component={AccountPage}/>
   
    </Routes>
    </div>
    
  </Router>
);

export default App;