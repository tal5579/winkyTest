import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Home from './Home';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            serverResponse: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }

    onClick = async () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"name": this.state.name, "email": this.state.email, "password": this.state.password});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };
        let serverResponse = await new Promise((resolve, reject) => {

            fetch("http://localhost:3002/user/register", requestOptions)
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
        this.setState({serverResponse: serverResponse});
        this.setState({loginSucsses: true});
        console.log('po', serverResponse)
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
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
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-control"
                           placeholder="Enter Name"/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange}
                           className="form-control" placeholder="Enter Email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.handlePassChange}
                           className="form-control" placeholder="Enter Password"/>
                </div>

                <Button onClick={this.onClick}>
                    Register
                </Button>
                {this.state.loginSucsses && <Home response={this.state.serverResponse}/>}

                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
        );
    }
}
