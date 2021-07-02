import React from "react";
import { Link, Redirect } from "react-router-dom";
import styles from '../scss/SignIn.module.scss';
import {SIGN_IN} from '../../Title/Title';
import Helmet from 'react-helmet';
// connect with server to save data signin
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SignInEmail: "",
      SignInPassword: "",
      validClass: "valid-notification",
      redirect: false,
    };
  }
  componentDidMount() {
    console.log(this.props.loggedIn);
  }
  onSignIn = (event) => {
    this.setState({ SignInEmail: event.target.value });
  };
  onPasswordSignIn = (event) => {
    this.setState({ SignInPassword: event.target.value });
  };

  onButtonSubmit = () => {
    fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.SignInEmail,
        password: this.state.SignInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.email) {
          this.props.LoadUser(data.email);
          this.setState({ redirect: true });
          this.props.isLogin("signin");
        } else {
          this.setState({
            validClass: "valid-notification unvalid-notification",
          });
        }
      });
  };
  render() {
    return (
      <>
        <Helmet><title>{SIGN_IN}</title></Helmet>
        <div className="background-signin">
          <div className="container-signin">
          {
            this.props.loggedIn === false ? 
            <div className="container-signin-form">
              <p className="signin-title">Login Form</p>
              <input
                onChange={this.onSignIn}
                type="email"
                placeholder="Email..."
                required
              />
              <p>
                <input
                  onChange={this.onPasswordSignIn}
                  type="password"
                  placeholder="Password"
                  required
                />
              </p>
              <p className="forgot-password">Forgot password?</p>
              <button onClick={this.onButtonSubmit} className="submit-button">
                Login
              </button>
              <p className="register">
                Don't have an account?{" "}
                <Link to="/account/register">
                  <span>Sign up now</span>
                </Link>
              </p>
              {this.state.redirect === true ? (
                <Redirect to="/shop/cart" />
              ) : (
                <p className={this.state.validClass}>
                  Your email or password is wrong, please try again
                </p>
              )}
            </div>
            :
            <div className={styles['signed-in']}>
                <p>You signed in!</p>
                <div className={styles.button}>
                    <Link to='/shop'><button>Go to shop!</button></Link>
                    <Link to='/shop/cart'><button>Go to cart!</button></Link>
                </div>
            </div>
          }
          </div>
        </div>
      </>
    );
  }
}

export default Signin;
