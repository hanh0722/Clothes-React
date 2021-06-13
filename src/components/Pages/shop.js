import React from "react";
import BannerClock from "../bannerClock/bannerclock";
import BreadCumShop from "../dashboardMaterial/BreadcumShop/BreadcumShop";
import ShopComponent from "../shopcomponent/shopcomponent";

const fetchItem = (link) =>{
    return fetch(link).then(response => response.json());
}
class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      item: [],
      totalItem: "",
      items: "",
      listItems: [],
      currentPage: 1,
      itemsPerPage: 8,
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
          url={`${process.env.PUBLIC_URL}/img/${item.img}`}
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
      <div>
        <BannerClock />
        <BreadCumShop
          quantity={this.state.totalItem}
          handlerSort={this.handlerSort}
        />
        <div className="shop-component">{renderItem}</div>
        <div className="list-number">{renderPageNumber}</div>
      </div>
    );
  }
}

export default Shop;
