import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// connect with server to save data signin
class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            SignInEmail: '',
            SignInPassword: '',
            validClass: 'valid-notification',
            redirect: false
        }
    }
    onSignIn = (event) =>{
        this.setState({SignInEmail: event.target.value});
    }
    onPasswordSignIn = (event) =>{
        this.setState({SignInPassword: event.target.value});
    }

    onButtonSubmit = () =>{
        fetch('http://localhost:3001/signin', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email: this.state.SignInEmail,
                password: this.state.SignInPassword
            })
        }).then(response => response.json())
        .then(data =>{
            if(data.email){
                this.props.LoadUser(data.email);
                this.setState({redirect: true});
            }else{
                this.setState({validClass: 'valid-notification unvalid-notification'})
            }
        })
    }
    render(){
        return(
            <div>
                <div className='background-signin'>
                    <div className='container-signin'>
                        <div className='container-signin-form'>
                            <p className='signin-title'>Login Form</p>
                            <input onChange={this.onSignIn} type='email' placeholder='Email...' required/>
                            <p><input onChange={this.onPasswordSignIn} type='password' placeholder='Password' required/></p>
                            <p className='forgot-password'>Forgot password?</p>
                            <button onClick={this.onButtonSubmit} className='submit-button'>Login</button>
                            <p className='register'>Don't have an account? <Link to='/shop/account/register'><span>Sign up now</span></Link></p>
                            {
                                this.state.redirect === true ? 
                                <Redirect to='/shop/cart'/>
                                :
                                <p className={this.state.validClass}>Your email or password is wrong, please try again</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;