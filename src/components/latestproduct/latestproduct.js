import React from 'react';
import {Link} from 'react-router-dom';

class ProductsLatest extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }
    onChangeSession = () =>{
        sessionStorage.setItem('informationProduct', this.props.nameProduct);
        this.setState({name: this.props.nameProduct});
    }

    render(){
        return(
            <div className='products-new'>
                <Link to={`/shop/${this.props.nameProduct}`}>
                    <img onClick={this.onChangeSession}
                    src={this.props.url} alt=''/>
                </Link>
                <Link onClick={this.onChangeSession} 
                    to={`/shop/${this.props.nameProduct}`}>
                    <p className='name-product-new'>{this.props.nameProduct}</p>
                </Link>
            {
                this.props.oldPrice !== null ? 
                <p className='price-new'>
                <span className='old-price'>${this.props.oldPrice}.00</span> 
                ${this.props.newPrice}.00</p>
                : <p className='price-new'>${this.props.newPrice}.00</p>
            }
            </div>
        )
    }
}

export default ProductsLatest;