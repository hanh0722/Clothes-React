import React from "react";
import BannerClock from "../bannerClock/bannerclock";
import BreadCumShop from "../dashboardMaterial/BreadcumShop/BreadcumShop";
import ShopComponent from "../shopcomponent/shopcomponent";
import {SHOP} from '../../Title/Title';
import Helmet from 'react-helmet';
import ScrollToTop from '../scrolltoTopRouter/scrollToTopRouter';
const fetchItem = (link) =>{
    return fetch(link).then(response => response.json());
}
const filterItem = (array, option) =>{
  const filter = array.filter(items =>{
    return items.gender === option;
  })
  return filter;
}
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      totalItem: "",
      items: "",
      listItems: [],
      currentPage: 1,
      itemsPerPage: 20,
      newListItem: [],
      initialArray: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetchItem('http://localhost:3001/products')
      .then((data) => {
        this.setState({
          item: data,
          totalItem: data.length,
          newListItem: data,
          initialArray: data
        });
      })
      .catch((err) => console.log(err));
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
    window.scrollTo(0,0);
  };



  handlerSort = (data) => {
      if(data === 0 || data === 3){
        this.setState({item: this.state.initialArray});
      }
      else if(data === 1){
        fetchItem(`http://localhost:3001/products/latest/orderBy/Asc`)
        .then(data => {
            this.setState({item: data})
        }).catch(err => console.log(err));
      }
      else if(data === 2){
          fetchItem('http://localhost:3001/products/latest/orderBy/Desc')
          .then(data =>{
            this.setState({item: data});
          })
      }
      else if(data === 4){
        const array = filterItem(this.state.initialArray, 'male');
        this.setState({item: array});
      }
      else if(data === 5){
        const array = filterItem(this.state.initialArray, 'female');
        this.setState({item: array});
      }
  };

  render() {
    const { item, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = item.slice(indexOfFirstItem, indexOfLastItem);

    const renderItem = currentItem.map((item, index) => {
      return (
        <ShopComponent
          key={index}
          url={item.img}
          name={item.name}
          id={item.id}
          sale={item.sale}
          price={item.price}
          value={this.onLoadItem}
        />
      );
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(item.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumber = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <>
        <ScrollToTop/>
        <Helmet><title>{SHOP}</title></Helmet>
        <BannerClock />
        <BreadCumShop
          quantity={this.state.totalItem}
          handlerSort={this.handlerSort}
          selected={this.props.selected}
          item={this.state.item.length}
        />
        <div className="shop-component">{renderItem}</div>
        <div className="list-number">{renderPageNumber}</div>
      </>
    );
  }
}

export default Shop;
