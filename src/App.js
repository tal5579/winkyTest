import React, { Component } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Login from '../src/components/Login';
import SignUp from '../src/components/SignUp';
import Home from '../src/components/Home';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
          
        <Button component={Link} to="/Login">
          Login
        </Button>
        <Button component={Link} to="/SignUp">
          Sign Up
        </Button>
          <Switch>
              <Route path="/SignUp" component={SignUp} />
              <Route path="/Login" component={Login} />
              <Route path="/Home" component={Home} />
              {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
          </Switch>
      </div>
      
    
    );
  }
}


