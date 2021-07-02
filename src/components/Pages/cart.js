import React from 'react';
import BannerClock from '../bannerClock/bannerclock';
import CartComponent from '../cartComponent/cartcomponent';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import TotalCart from '../cartComponent/total';
import {CART} from '../../Title/Title';
import Helmet from 'react-helmet';
class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rowtable: [],
            total: '',
            customer: '',
            cartComponent: [],
        }
    }

    componentDidMount(){
        localStorage.getItem('email');
        const email = JSON.parse(localStorage.getItem('email'));
        if(email === null){
            this.setState({customer: ''});
        }else{
            this.setState({customer: email.email});
        }
        this.setState({rowtable: this.props.product});
    }

    onRemoveItem = (item) =>{
        const newCart = this.state.rowtable.filter(items =>{
            return items.id !== item;
        });
        this.setState({rowtable: newCart});
        this.props.updateCart(newCart);
    }
    rowTable = () =>{
        const Data = this.state.rowtable.map((items, i) =>{
            return <CartComponent key={i} url={items.url}
            id={items.id} 
            name={items.nameProduct} 
            price={items.price}
            quantity={items.quantity}
            removeItem = {this.onRemoveItem}
            />
        })
        return Data;
    }

    render(){
        return(
            <>
            <Helmet><title>{CART}</title></Helmet>
            <BannerClock/>
            <div className='container-signin container-cart-all'>
                <div className='container-cart'>
                    <div className='infor-cart'>
                        <p className='cart-infor-title'>Cart</p>
                        {
                            this.state.rowtable.length === 0 ? 
                            <div>
                                <p className='empty-cart'>
                                <FontAwesomeIcon icon={faCartArrowDown}/> Your cart is currenly empty
                                </p>
                                <Link to='/shop'><button>Return to shop</button></Link>
                            </div>
                            :(
                                <div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th></th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                                <th></th>
                                            </tr>
                                            {this.rowTable()}
                                        </tbody>
                                    </table>
                                    <Link to='/shop'><button>Come back to shop</button></Link>
                                </div>
                            )
                        }
                    </div>
                    <div className='checkout-cart'>
                        <TotalCart total={this.state.rowtable} check={this.state.rowtable}/>
                        {
                            this.state.rowtable.length !== 0 ? 
                            (
                                this.state.customer === '' ? 
                            <Link to='/shop/account'><button className='button-signin'>Sign in before checkout</button></Link>
                            :
                            <Link to='/shop/checkout'><button className='button-checkout'>Go to checkout</button></Link>
                            )
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Cart;