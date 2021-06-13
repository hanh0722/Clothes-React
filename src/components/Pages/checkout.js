import React, { Fragment } from 'react';
import {ListCity} from '../listCity/listcity';
import Particles from "react-tsparticles";
import {Link} from 'react-router-dom';
import Bought from '../ordered/thank';
class Checkout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: ListCity,
            show: 'open',
            inputCity: '',
            emailUser: '',
            cart: [],
            showlist: '',
            user: {
              firstname: '',
              lastname: '',
              companyname: '',
              address: '',
              phonenumber: '',
              email: '',
            },
            added: false,
            validation: 'notice-filled',
            total: ''
        }
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }
    componentDidMount(){
      this.setState({cart: this.props.cart});
      const signIn = localStorage.getItem('email');
      if(this.props.validate === true){
        this.setState({emailUser: JSON.parse(signIn)});
      }
      else{
        this.setState({emailUser: ''});
      }

      const Total = this.props.cart.reduce((acc, items) =>{
        return acc + items.quantity * items.price;
      }, 0);
      this.setState({total: Total});
    }
    ShowList = () =>{
        this.setState({showlist: 'class-show'});
    }
    onChangeCity = (event) =>{
        this.setState({inputCity: event.target.value});
    }

    loadFirstName = (event) =>{
      this.setState(Object.assign(this.state.user, {firstname: event.target.value}));
    }

    loadLastName = (event) =>{
      this.setState(Object.assign(this.state.user, {lastname: event.target.value}));
    }

    loadAddress = (event) =>{
      this.setState(Object.assign(this.state.user, {address: event.target.value}));
    }

    loadEmail = (event) =>{
      this.setState(Object.assign(this.state.user, {email: event.target.value}));
    }

    loadPhoneNumber = (event) =>{
      this.setState(Object.assign(this.state.user, {phonenumber: event.target.value}));
    }

    onLoadCompanyName = (event) =>{
      this.setState(Object.assign(this.state.user, {companyname: event.target.value}));
    }
    sendData = () =>{
        fetch('http://localhost:3001/bill', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({
            emailUser: this.state.emailUser,
            firstName: this.state.user.firstname,
            lastName: this.state.user.lastname,
            companyName: this.state.user.companyname,
            countryRegion: this.state.inputCity,
            address: this.state.user.address,
            phoneNumber: this.state.user.phonenumber,
            email: this.state.user.email,
            items: JSON.stringify(this.state.cart),
            totalprice: this.state.total
          })
        }).then(response => response.json())
        .then(data =>{
          if(data.id){
            this.setState({added: true})
            this.props.onSetCart();
          }
          else{
            this.setState({validation: 'notice-filled error-filled'});
          }
        }).catch(err => console.log(err));
    }
    particlesInit(main) {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }
    particlesLoaded(container){
        console.log(container);
    }
    render(){
        const CheckOut = this.state.cart.map((items, index) =>{
          return <tr key={index}>
            <td>{items.nameProduct}<span>x {items.quantity}</span></td>
            <td>${items.quantity * items.price}</td>
          </tr>
        });
        
        return(
        <div>
        <Particles
              id="tsparticles"
              init={this.particlesInit}
              loaded={this.particlesLoaded}
              options={{
                background: {
                  color: {
                    value: "#000000",
                  },
                },
                fpsLimit: 60,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 30,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 3,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                    value: 40,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: true,
              }}
            />
                {
                  this.state.added === false ?
                  <div className='container-section container-bill'>
                    <p className='top-title'>Checkout</p>
                    {
                      this.props.validate === false ? 
                      <p>Returning customer? <span><Link to="/shop/account">Click here to login</Link></span></p>
                      :
                      <p>Hello {this.state.emailUser}</p>
                    }
                    {
                    this.props.validate === true ? 
                      <Fragment>
                        <p className='billing-detail-title'>Billing details</p>
                        <div className='box-bill'>
                          <div className='bill'>
                              <div className='first-infor'>
                                  <div className='personal-information'>
                                      <div>
                                          <label htmlFor='first-name'>First Name</label>
                                          <p><input onChange={this.loadFirstName} 
                                          type='text' 
                                          required maxLength='50' 
                                          placeholder='First Name' 
                                          id='first-name' 
                                          name='first-name'/></p>
                                      </div>
                                      <div>
                                          <label htmlFor='last-name'>Last Name</label>
                                          <p><input onChange={this.loadLastName} 
                                          type='text' 
                                          required maxLength='50' 
                                          placeholder='Last Name' 
                                          id='last-name' 
                                          name='last-name'/></p>
                                      </div>
                                  </div>
                                  <div>
                                      <label htmlFor='company-name'>Company Name</label>
                                      <p><input onChange={this.onLoadCompanyName} 
                                      type='text' 
                                      maxLength='50' 
                                      placeholder='Company Name (Optional)' 
                                      id='company-name' 
                                      name='company-name'/></p>
                                  </div>
                                  <div>
                                      <label htmlFor='country'>Country / Region</label>
                                      <div className='country-side'>
                                          <input
                                          onChange={this.onChangeCity} 
                                          type='text' 
                                          maxLength='50' 
                                          required placeholder='Country / Region' 
                                          name='country' 
                                          id='country'/>
                                      </div>
                                  </div>
                                  <div className='address'>
                                      <label htmlFor='address'>Address</label>
                                      <p><input onChange={this.loadAddress} 
                                      type='text' 
                                      maxLength='100' 
                                      required placeholder='Address' 
                                      id='address' 
                                      name='address'/></p>
                                  </div>
                                  <div>
                                      <label htmlFor='phone-number'>Phone Number</label>
                                      <p><input onChange={this.loadPhoneNumber} 
                                      type='tel' 
                                      required placeholder='Phone Number' 
                                      name='tel' 
                                      id='phone-number'/></p>
                                  </div>
                                  <div>
                                      <label htmlFor='email-address'>Email Address</label>
                                      <p><input onChange={this.loadEmail} 
                                      type='email' 
                                      placeholder='Email' 
                                      id='email-address' 
                                      name='email'/></p>
                                  </div>
                              </div>
                          </div>
                          <div className='checkout-box'>
                              <table className='table-box-checkout'>
                                <tbody>
                                  <tr>
                                    <th style={{width: '80%', textAlign: 'start'}}>Product</th>
                                    <th style={{width: '20%', textAlign: 'center'}}>Subtotal</th>
                                  </tr>
                                  {CheckOut}
                                  <tr>
                                    <td>Total</td>
                                    <td>{this.state.total}$</td>
                                  </tr>
                                </tbody>
                              </table>
                              <div style={{textAlign: 'end'}}>
                                <button onClick={this.sendData}>Order!</button>
                              </div>
                              <p className={this.state.validation}>Check your information with not filled blanks</p>
                          </div>
                        </div>
                      </Fragment>
                      :
                      <div style={{textTransform: 'capitalize', textAlign: 'center', padding: '50px 0px', fontSize: '25px'}}>
                        <p>Sign in before continue checkout</p>
                      </div>
                    }
                  </div> 
                  :
                  <Bought/>
                }
              </div>
        )
    }
}

export default Checkout;