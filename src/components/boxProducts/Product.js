import React from 'react';
import {Link} from 'react-router-dom';
class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }
    componentDidMount(){
        this.setState({name: this.props.name});
    }

    onDataSession = () =>{
        this.setState({name: this.props.name});
        sessionStorage.setItem('informationProduct', this.state.name);
    }
    render(){
        return(
            <div className='recent-product'>
                <Link to={`/shop/product/${this.props.id}/${this.props.name}`}><img onClick={this.onDataSession} src={this.props.picture} alt=''/></Link>
                <div className='price'>
                    <p className='name-product'>{this.props.name}</p>
                    {
                        this.props.sale !== null ?
                        (
                            <div>
                                <p className='price-product'><span className='price-first'>
                                ${this.props.sale}.00</span>
                                ${this.props.price}.00</p>
                            </div>
                        )
                        :
                        <p className='price-product'>${this.props.price}.00</p>
                    }
                </div>
            </div>
        )
    }
}

export default Product;