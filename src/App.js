import React from 'react';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import './components/scss/style.scss';
import Footer from './components/footer/footer';
import ArrowTop from './components/arrowTop/arrowtop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './components/scrolltoTopRouter/scrollToTopRouter';
import Main from './components/Pages/main';
import About from './components/Pages/about';
import Services from './components/Pages/service';
import Signin from './components/Pages/signin';
import Cart from './components/Pages/cart';
import Shop from './components/Pages/shop';
import Checkout from './components/Pages/checkout';
import Contact from './components/Pages/contact';
import Blog from './components/Pages/blog';
import Register from './components/Pages/register';
import DetailProduct from './components/detailProduct/detailProduct';
import BlogPage from './components/blogComponent/blogPage';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      route: 'main',
      arrowtop: false,
      data: [],
      user: {
        email: '',
      },
      blog: [],
      product: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', () =>{
      const elements = document.querySelector('.arrow-top')
        if(window.pageYOffset > 100){
          elements.classList.add('arrow-show-up');
          this.setState({arrowtop: true});
        }else{
          elements.classList.remove('arrow-show-up');
          this.setState({arrowtop: false});
        }
    });

    fetch('http://localhost:3001/products').then(response => response.json())
    .then(data =>{
      // this.setState({data: data});
      const urls = data.map(items =>{
        return <Route key={items.id} path={`/shop/${items.name}`}>
          <DetailProduct loadProduct={this.onLoadProduct}/>
        </Route>
      })
      this.setState({data: urls});
    });

    fetch('http://localhost:3001/blog')
    .then(response => response.json())
    .then(data =>{
      const blogs = data.map(items =>{
        return <Route key={items.id} path={`/blog/${items.title}`}>
          <BlogPage/>
        </Route>
      });
      this.setState({blog: blogs});
    })
  }

  onLoadProduct = (product) =>{
    const exist = this.state.product.find(items => items.id === product.id);
    if(exist){
      // update the quantity if it's existed
      // bug quantity when we click multiple time => exist get data and plus but after that
      // component get array of setState => quantity is existed => plus => double
      exist.quantity++;
    }
    else{
      // if it doesn't exist in cart => add into array and up props to cart
      this.setState({product: this.state.product.concat(product)});
    }
  }
  onUpdateCart = (item) =>{
    this.setState({product: item});
  }
  onNavBar = () =>{
    const navBar = document.querySelector('.nav-list');
    const backgroundBlack = document.querySelector('.background-black');
    navBar.classList.toggle('transition-navbar');
    backgroundBlack.classList.toggle('background-black-block');
  }

  onSetCart = () =>{
    this.setState({product: []});
  }
  onTop = () =>{
    if(this.state.arrowtop === false){
        return;
    }
    document.querySelector('html').style.scrollBehavior = 'smooth';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  onLoadUser = (user) =>{
    this.setState({
      user: user
    })
    localStorage.setItem('email', JSON.stringify(this.state.user));
  }

  SignOut = () =>{
    localStorage.removeItem('email');
    console.log(localStorage.getItem('email'));
  }
  render(){
    return(
      <Router>
        <div>
        <ScrollToTop/>
          <Header SignOut={this.SignOut} onNavBar={this.onNavBar}/>
          <Navigation onNav={this.onNavBar}/>
          <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/services' component={Services}></Route>
            <Route path='/shop' exact>
              <Shop />
            </Route>
            {this.state.data}
            <Route path='/shop/account' exact>
              <Signin LoadUser={this.onLoadUser}/>
            </Route>
            <Route path='/shop/account/register' component={Register}></Route>
            <Route path='/shop/checkout'>
              <Checkout onSetCart={this.onSetCart} cart={this.state.product}/>
            </Route>
            <Route path='/shop/cart'>
              <Cart updateCart={this.onUpdateCart} product={this.state.product} user={this.state.user}/>
            </Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/blog' exact >
              <Blog/>
            </Route>
            {this.state.blog} 
          </Switch>
          <ArrowTop onTop={this.onTop}/> 
          <Footer/>
        </div>
      </Router>
    )
  }
}
export default App;
