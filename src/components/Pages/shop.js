import React from 'react';
import BannerClock from '../bannerClock/bannerclock';
import ShopComponent from '../shopcomponent/shopcomponent';
class Shop extends React.Component{
    constructor(){
        super();
        this.state = {
            item: [],
            totalItem: '',
            items: '',
            listItems: [],
            currentPage: 1,
            itemsPerPage: 8,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        fetch('http://localhost:3001/products').then(response => response.json())
        .then(data =>{
            this.setState({
                item: data,
                totalItem: data.length,
            });
        })
    }
    handleClick = (event) =>{
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    ListItems = () =>{
        const List = this.state.item.map((items, i) =>{
            return <ShopComponent 
            key={items.id}
            url={`${process.env.PUBLIC_URL}}/img/${items.img}`} 
            name={items.name} sale={items.sale} 
            price={items.price}
            />
        })
        return List;
    }
    render(){
        const {item, currentPage, itemsPerPage} = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItem = item.slice(indexOfFirstItem, indexOfLastItem);
        
        const renderItem = currentItem.map((item, index) =>{
            return <ShopComponent key={index} url={`${process.env.PUBLIC_URL}/img/${item.img}`}
            name={item.name} id={item.id} sale={item.sale} price={item.price} value={this.onLoadItem}/>
        })

        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(item.length / itemsPerPage); i++){
            pageNumbers.push(i);
        }

        const renderPageNumber = pageNumbers.map(number =>{
           return <li key={number} id={number} onClick={this.handleClick}>{number}</li>
        })

        return(
            <div>
                <BannerClock/>
                <p>{this.state.listItems}</p>
                <div className='banner-shop'>
                    <p>Showing all {this.state.totalItem} results</p>
                    <select>
                        <option>Default</option>
                        <option>Man</option>
                        <option>Women</option>
                        <option>Sale</option>
                    </select>
                </div>
                <div className='shop-component'>
                    {renderItem}                   
                </div>
                <div className='list-number'>
                    {renderPageNumber}
                </div>
            </div>
        )
    }
}

export default Shop;