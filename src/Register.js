import React from "react";
import { Form, Message, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// import { Register } from './serviceWorker';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
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

  handleOnSubmit() {
    console.log("Information Recieved");
  }
// if({this.state.firstName}||this)
  render() {
    return (
      <div>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <Form.Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <Form.Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <Form.Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <Button >Submit</Button>
          <h1>
            <p>FirstName {this.state.firstName}</p> {this.state.lastName} {this.state.email}
          </h1>
        </Form>
      </div>
    );
  }
}
export default Register;
