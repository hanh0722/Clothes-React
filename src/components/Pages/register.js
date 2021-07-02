import React from "react";
import { Link, Redirect } from "react-router-dom";
import { REGISTER } from "../../Title/Title";
import Helmet from "react-helmet";
import Notification from "../Notification/Notification";
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      emailRegister: "",
      passwordRegister: "",
      classNameInput: "tool-tip",
      nameRegister: "",
      ageRegister: "",
      isValid: true,
      check: false,
      isRegistered: false,
      isValidSuccess: true,
      notification: '',
    };
  }
  onNameInput = (event) => {
    this.setState({ nameRegister: event.target.value });
    this.setState({isValidSuccess: true});
  };
  onAgeRegister = (event) => {
    this.setState({ ageRegister: event.target.value });
    this.setState({isValidSuccess: true});
  };
  onPasswordInput = (event) => {
    if (event.target.value.length < 8) {
      this.setState({ isValid: false });
    } else {
      this.setState({ isValid: true });
    }
    this.setState({ passwordRegister: event.target.value });

    if (event.target.value !== "") {
      this.setState({ classNameInput: "tool-tip" });
    }
    this.setState({isValidSuccess: true});
  };
  onEmailInput = (event) => {
    this.setState({isValidSuccess: true});
    this.setState({ emailRegister: event.target.value });
  };
  onNotificationInput = () => {
    if (this.state.passwordRegister === "") {
      this.setState({ classNameInput: "tool-tip-show tool-tip" });
    }
  };
  onSubmitRegister = () => {
    fetch("http://localhost:3001/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        name: this.state.nameRegister,
        age: this.state.ageRegister,
        email: this.state.emailRegister,
        password: this.state.passwordRegister,
    }),
    })
    .then((response) => response.json())
    .then((result) => {
        if (result.id) {
        this.setState({ isRegistered: true });
        } else {
        this.setState({ isValidSuccess: false });
        this.setState({notification: 'Please enter valid email, password, name. Your email could be used!'});
        }
    });
  };
  render() {
    return this.state.isRegistered === true ? (
      <Redirect to="/shop/account" />
    ) : (
      <>
        <Helmet>
          <title>{REGISTER}</title>
        </Helmet>
        <div className="background-signin">
          <div className="container-signin">
            <div className="container-signin-form">
              <p className="signin-title">Register</p>
              <input
                onChange={this.onNameInput}
                type="text"
                placeholder="Your Name"
                required
                maxLength="50"
              ></input>
              <br />
              <input
                onChange={this.onAgeRegister}
                type="number"
                placeholder="Your Age"
                min="1"
              ></input>
              <input
                onChange={this.onEmailInput}
                type="email"
                placeholder="Your Email..."
                required
              />
              <div className="tooltip-password">
                <p className={this.state.classNameInput}>
                  Your password must be at least 8 characters
                </p>
                <p>
                  <input
                    onClick={this.onNotificationInput}
                    onChange={this.onPasswordInput}
                    type="password"
                    placeholder="Your Password"
                    required
                  />
                </p>
              </div>
              <button onClick={this.onSubmitRegister} className="submit-button">
                Register
              </button>
              <p className="register">
                Have an account?
                <Link to="/account">
                  <span> Sign in now</span>
                </Link>
              </p>
              <p
                className={
                  this.state.isValidSuccess === false
                    ? "valid-notification unvalid-notification"
                    : "valid-notification"
                }
              >
                <Notification notify={this.state.notification}/>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
