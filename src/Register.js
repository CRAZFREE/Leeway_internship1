import React from "react";
import { Form, Message} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import {Link} from 'react-router-dom'
// import { Register } from './serviceWorker';
import {connect} from 'react-redux';
import {updatefirstName,updatelastName,updateEmail,updatePassword} from '../action/index';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      empty:"initial"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      // firstName : event.target.{fir},
      //    lastName:event.target.value
    });
  }

  handleOnSubmit= event => {
      event.preventDefault();
      if(this.isEmpty(this.state)){
        this.setState({empty: 'true'})
        console.log("Form is Incomplete");
      }
      else{
        console.log("Information Recieved");
        this.setState({empty: 'false'})

      }
}
isEmpty= ({firstName,lastName,email,password}) =>{
    return !firstName.length || !lastName.length || !email.length || !password.length;
}


// if({this.state.firstName}||this)
  render() {
      const {firstName,lastName,email,password,empty}=this.state;  //destructing
      let button;
      if(empty==="initial"){
          button=<Form.Button>Click to Register</Form.Button>
      }
      if(empty==="ture"){
        button=<Form.Button>Click to Register</Form.Button>
    }  
    if(empty==="false"){
        button=<Form.Button>Click to View</Form.Button>
    } 
    return (
      <div>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            value={firstName}
          />
          <Form.Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            value={lastName}
          />
          <Form.Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={email}
          />
          <Form.Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={password}
          />
          {button}
          {
              empty==='true' &&
              (
                <Message>
                  <h3>Form Empty</h3>
                </Message>
              )
            }
          
          <h1>
            <p>FirstName {this.state.firstName}<br> {this.state.lastName}</br> <br>{this.state.email}</br> </p>
          </h1>
        </Form>
      </div>
    );
  }
}

const mapStateToProps= (state)=>{
    return{
      user: state.user
    }
  }
  
  const mapDispatchtoProps= ()=>{
    return{
      updatefirstName,
      updatelastName,
      updateEmail,
      updatePassword
    }
  }
export default connect(mapStateToProps,mapDispatchtoProps())(Register);
