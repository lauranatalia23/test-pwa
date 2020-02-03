import React, { Component } from 'react';
import fire from './config/Fire';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login Admin',
            loginBtn: true
        }
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    getAction = action => {
            this.setState({formTitle: 'Login', loginBtn:true, fireErrors: ''});
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        let errorNotification = this.state.fireErrors ?
            ( <div className="alert alert-warning"> {this.state.fireErrors} </div>) : null;
        
        let submitBtn = this.state.loginBtn ?
            (<input className="btn btn-primary" type="submit" onClick={this.login} value="Submit" />) :
            (<input className="btn btn-success" type="submit" onClick={this.register} value="Register" />);
        
        return (
            <div className="container">
                <h1>{this.state.formTitle}</h1>
                <div className="col-md-8">
                    {errorNotification}
                    <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword" placeholder="password" />
                    </div>
                        {submitBtn}
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;