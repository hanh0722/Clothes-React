import React from 'react';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import './components/scss/style.scss';
import './components/scss/animation.css';
import './components/scss/style2.scss';
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
import InformationCustomer from './components/dashboardMaterial/customerInformation/customer';
import DashboardAdmin from './components/Pages/dashboardAdmin';
import HomePage from './components/dashboardMaterial/HomePage/homepage';
import ManageBlog from './components/dashboardMaterial/BlogAdmin/blogAdmin';
import ChangeContent from './components/dashboardMaterial/ChangeContent/ChangeContent';
import Card from './components/dashboardMaterial/Card/Card';
import RightSide from './components/dashboardMaterial/RightSide/Rightside';
import ECommerce from './components/dashboardMaterial/ECommerce/ECommerce';
import WelcomeAdmin from './components/dashboardMaterial/Welcome/Welcome';
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
      isLoaded: false,
      shopItems: [],
      isLogin: false,
      addAnimation: '',
      account: '',
      changeData: {
        id: '',
        title: '',
        contentblog: '',
        url: ''
      }
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
      this.setState({numberBlog: data})
      const blogs = data.map(items =>{
        return <Route key={items.id} path={`/blog/${items.title}`}>
          <BlogPage/>
        </Route>
      });
      this.setState({blog: blogs});
    })
    
    if(localStorage.getItem('email') !== null){
      this.setState({isLogin: true});
    }
  }

  onLoadProduct = (product) =>{
    const exist = this.state.product.find(items => items.id === product.id);
    if(exist){
      // update the quantity if it's existed
      // bug quantity when we click multiple time => exist get data and plus but after that
      // component get array of setState => quantity is existed => plus => double
      exist.quantity = exist.quantity + product.quantity;
    }
    else{
      // if it doesn't exist in cart => add into array and up props to cart
      this.setState({product: [...this.state.product, product]});
    }
  }
  onUpdateCart = (item) =>{
    this.setState({product: item});
  }
  onNavBar = () =>{
    const navBar = document.querySelector('.nav-list');
    const backgroundBlack = document.querySelector('.background-black');
    navBar.classList.toggle('transition-navbar');
    const check = backgroundBlack.classList.toggle('background-black-block');
    if(check === true){
      this.setState({addAnimation: 'add-animation'});
    }
    else{
      this.setState({addAnimation: ''});
    }
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
  setLogin = (status) =>{
    if(status === 'signin'){
      this.setState({isLogin: true});
    }
    else{
      this.setState({isLogin: false});
      localStorage.removeItem('email');
    }
  }
  onSetAdmin = (admin) =>{
    this.setState({account: admin});
  }
  handleData = (data) =>{
    this.setState({changeData: data});
  }
  render(){
    return(
      <Router>
        <ScrollToTop/>
          <Header onSetDashBoard={this.onDashBoard} 
                  onSetAdmin={this.onSetAdmin} 
                  validate={this.state.isLogin} 
                  isLogin={this.setLogin} 
                  onNavBar={this.onNavBar}  
          />
          <Navigation isLogin={this.state.isLogin} addAnimation={this.state.addAnimation} onNav={this.onNavBar}/>
          <Switch>
            
            <Route path='/' exact><Main/></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/services' component={Services}></Route>
                   
            <Route path='/shop' exact>
              <Shop />
            </Route>
            {this.state.data}
            <Route path='/shop/account' exact>
              <Signin isLogin={this.setLogin} LoadUser={this.onLoadUser}/>
            </Route>
            <Route path='/shop/account/register' component={Register}></Route>
            <Route path='/account/customer' component={InformationCustomer}></Route>
            <Route path='/shop/checkout'>
              <Checkout validate={this.state.isLogin} onSetCart={this.onSetCart} cart={this.state.product}/>
            </Route>
            <Route path='/shop/cart'>
              <Cart updateCart={this.onUpdateCart} product={this.state.product} user={this.state.user}/>
            </Route>

            <Route path='/contact' component={Contact}></Route>
            <Route path='/blog' exact >
              <Blog/>
            </Route>
            {this.state.blog}
            <Card>
              <DashboardAdmin/>
              <RightSide>
                <WelcomeAdmin onName={this.state.account}/>
                <Route path='/dashboard/admin/app'>
                    <HomePage
                    onNumberBlog={this.state.data}
                    />
                </Route>
                <Route path='/dashboard/admin/blog' exact>
                    <ManageBlog 
                    title='Manage Blog'
                    handleData={this.handleData}
                    />
                </Route>
                <Route path='/dashboard/admin/blog/fix/:id'>
                    <ChangeContent data={this.state.changeData}/>
                </Route>
                <Route path='/dashboard/admin/E-commerce'>
                  <ECommerce/>
                </Route>
              </RightSide>
            </Card>
          </Switch>
          <ArrowTop onTop={this.onTop}/> 
          <Footer/>
      </Router>
    )
  }
}
export default App;
