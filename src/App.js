import React from "react";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import "./components/scss/style.scss";
import "./components/scss/animation.css";
import "./components/scss/style2.scss";
import Footer from "./components/footer/footer";
import ArrowTop from "./components/arrowTop/arrowtop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ScrollToTop from "./components/scrolltoTopRouter/scrollToTopRouter";
import Main from "./components/Pages/main";
import About from "./components/Pages/about";
import Services from "./components/Pages/service";
import Signin from "./components/Pages/signin";
import Cart from "./components/Pages/cart";
import Shop from "./components/Pages/shop";
import Checkout from "./components/Pages/checkout";
import Contact from "./components/Pages/contact";
import Blog from "./components/Pages/blog";
import Register from "./components/Pages/register";
import DetailProduct from "./components/detailProduct/detailProduct";
import BlogPage from "./components/blogComponent/blogPage";
import InformationCustomer from "./components/dashboardMaterial/customerInformation/customer";
import HomePage from "./components/dashboardMaterial/HomePage/homepage";
import ManageBlog from "./components/dashboardMaterial/BlogAdmin/blogAdmin";
import ChangeContent from "./components/dashboardMaterial/ChangeContent/ChangeContent";
import ECommerce from "./components/dashboardMaterial/ECommerce/ECommerce";
import Error404 from "./components/Error404/Error404";
import ShopGender from "./components/ShopGender/ShopGender";
import BlogCreated from './components/dashboardMaterial/BlogAdmin/BlogCreated/BlogCreated';
import NewProduct from "./components/dashboardMaterial/ECommerce/NewProduct/NewProduct";
import User from "./components/dashboardMaterial/Users/User";
import UserDetail from "./components/dashboardMaterial/Users/view/UserDetail";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "main",
      arrowtop: false,
      data: [],
      user: {
        email: "",
      },
      blog: [],
      product: [],
      isLoaded: false,
      shopItems: [],
      isLogin: false,
      addAnimation: "",
      account: "",
      changeData: {
        id: "",
        title: "",
        contentblog: "",
        url: "",
      },
      sortBy: 0,
      selected: 'default',
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const elements = document.querySelector(".arrow-top");
      if (window.pageYOffset > 100) {
        elements.classList.add("arrow-show-up");
        this.setState({ arrowtop: true });
      } else {
        elements.classList.remove("arrow-show-up");
        this.setState({ arrowtop: false });
      }
    });

    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      });

    fetch("http://localhost:3001/blog")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ numberBlog: data });
      });

    if (localStorage.getItem("email") !== null) {
      this.setState({ isLogin: true });
    }
  }

  onLoadProduct = (product) => {
    const exist = this.state.product.find((items) => items.id === product.id);
    if (exist) {
      // update the quantity if it's existed
      // bug quantity when we click multiple time => exist get data and plus but after that
      // component get array of setState => quantity is existed => plus => double
      exist.quantity = exist.quantity + product.quantity;
    } else {
      // if it doesn't exist in cart => add into array and up props to cart
      this.setState({ product: [...this.state.product, product] });
    }
  };
  onUpdateCart = (item) => {
    this.setState({ product: item });
  };
  onNavBar = () => {
    const navBar = document.querySelector(".nav-list");
    const backgroundBlack = document.querySelector(".background-black");
    navBar.classList.toggle("transition-navbar");
    const check = backgroundBlack.classList.toggle("background-black-block");
    if (check === true) {
      this.setState({ addAnimation: "add-animation" });
    } else {
      this.setState({ addAnimation: "" });
    }
  };

  onSetCart = () => {
    this.setState({ product: [] });
  };
  onTop = () => {
    if (this.state.arrowtop === false) {
      return;
    }
    document.querySelector("html").style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  onLoadUser = (user) => {
    this.setState({
      user: user,
    });
    localStorage.setItem("email", JSON.stringify(this.state.user));
  };
  setLogin = (status) => {
    if (status === "signin") {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
      localStorage.removeItem("email");
    }
  };
  onSetAdmin = (admin) => {
    this.setState({ account: admin });
  };
  handleData = (data) => {
    this.setState({ changeData: data });
  };
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Header
          onSetDashBoard={this.onDashBoard}
          onSetAdmin={this.onSetAdmin}
          validate={this.state.isLogin}
          isLogin={this.setLogin}
          onNavBar={this.onNavBar}
        />
        <Navigation
          isLogin={this.state.isLogin}
          addAnimation={this.state.addAnimation}
          onNav={this.onNavBar}
        />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/about" component={About}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/account" exact>
            <Signin isLogin={this.setLogin} loggedIn={this.state.isLogin} LoadUser={this.onLoadUser} />
          </Route>
          <Route path="/account/register" component={Register}></Route>
          <Route
            path="/account/customer"
            component={InformationCustomer}
          ></Route>
          <Route path="/shop" exact>
            <Shop/>
          </Route>
          <Route path='/shop/collection/:gender'>
            <ShopGender products={this.state.data}/>
          </Route>
          <Route path="/shop/product/:id/:name">
            <DetailProduct loadProduct={this.onLoadProduct} />
          </Route>
          <Route path="/shop/cart">
            <Cart
              updateCart={this.onUpdateCart}
              product={this.state.product}
              user={this.state.user}
            />
          </Route>
          <Route path="/shop/checkout">
            <Checkout
              validate={this.state.isLogin}
              onSetCart={this.onSetCart}
              cart={this.state.product}
            />
          </Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:name">
            <BlogPage />
          </Route>
          {/* dashboard for admin */}
          <Route path="/dashboard/admin/app">
            <HomePage onNumberBlog={this.state.data} onName={this.state.account} />
          </Route>
          <Route path="/dashboard/admin/blog" exact>
            <ManageBlog title="Manage Blog" handleData={this.handleData} />
          </Route>
          <Route path='/dashboard/admin/blog/create-post' component={BlogCreated}/>
          <Route path="/dashboard/admin/blog/fix/:id">
            <ChangeContent data={this.state.changeData} />
          </Route>
          <Route path="/dashboard/admin/E-commerce" exact>
            <ECommerce />
          </Route>
          <Route path='/dashboard/admin/E-commerce/new-product' component={NewProduct}/>
          <Route path='/dashboard/admin/user' exact component={User}/>
          <Route path='/dashboard/admin/user/:id' component={UserDetail}/>
          <Route path="/error/404" component={Error404} />
          <Redirect to="/error/404" />
        </Switch>
        <ArrowTop onTop={this.onTop} />
        <Footer />
      </Router>
    );
  }
}
export default App;
