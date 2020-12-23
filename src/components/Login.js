import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }

    onClick = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"email": this.state.email, "password": this.state.pass});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        let serverResponse = await new Promise((resolve, reject) => {
            fetch("http://localhost:3002/user/login", requestOptions)
                .then(response => {
                    resolve(response.text());
                })
                .catch(error => reject(error));
        })

        serverResponse = JSON.parse(serverResponse);
        if(serverResponse && serverResponse.error){
            alert(serverResponse.error);
            return;
        }
        this.setState({loginSucsses: true})


    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePassChange = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={this.state.email}
                           onChange={this.handleEmailChange} placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.handlePassChange}
                           className="form-control" placeholder="Enter password"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Button onClick={this.onClick}>
                    Log In
                </Button>

                {this.state.loginSucsses && <Link to="/home">
                </Link>}


                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
