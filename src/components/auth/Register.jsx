import axios from 'axios';
import React, { Component } from 'react'

export default class Register extends Component {
    constructor() {

        super();
        this.state  = {
            email:'',
            username :'',
            password:'',
            password2:'',
            role:'',
            errors:{}
        };
        this.onChange=this.onChange.bind(this);
        // we will bind this object with ur event
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {

        this.setState({[e.target.name]:e.target.value});
        //when state of ur controller is changing then we are holding that changed value in state.
    }
    onSubmit(e) {

        const newUser = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password,
            role : ['user']
        }
        e.preventDefault();
        console.log('hello from submit');
        console.log(JSON.stringify(this.state));
        axios.post('http://localhost:9005/api/auth/signup', newUser)
        .then(res => console.log(JSON.stringify(res)))
        .catch(err =>console.log(JSON.stringify(err)))
        
    }
    render() {
        return (
            <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Sign Up</h1>
                  <p className="lead text-center">Create your DevConnector account</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Name" name="username" required  value={this.state.username} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange}/>
                      <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-lg" placeholder="Password" name="password"  value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange} />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        
        
        )
    }
    
}
