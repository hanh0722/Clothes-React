import React from 'react';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
class DetailProduct extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            active: false,
            nameClass: 'direct-cart',
            product: {
                id: '',
                url: '',
                introduction: '',
                nameProduct: '',
                price: '',
                sale: '',
                quantity: 0
            },
            exist: true,
            background: 'background-black-product'
        }

    }
    componentDidMount(){
        const dataFetch = sessionStorage.getItem('informationProduct');
        this.setState({name: dataFetch});
        fetch('http://localhost:3001/shop/detail', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: dataFetch
            })
        }).then(response => response.json())
        .then(data =>{
            if(data.id){
                this.setState({
                    product: {
                        id: data.id,
                        url: data.img,
                        introduction: data.introduction,
                        nameProduct: data.name,
                        price: data.price,
                        sale: data.sale,
                        quantity: 1
                    }
                })
            }else{
                // 404 if something happen
                this.setState({exist: false});
            }
        }).catch(err => console.log(err));
    }
    onQuantity = (event) =>{
        this.setState(Object.assign(this.state.product, {quantity: Number(event.target.value)}));
    }
    onFullScreen = () =>{
        const button = document.querySelector('.left-details img');
        if(button.requestFullscreen){
            button.requestFullscreen();
        }else if(button.webkitRequestFullscreen){
            button.webkitRequestFullscreen();
        }
        this.setState({active: true});
    }
    onCart = () =>{
        this.setState({nameClass: 'direct-cart show-direct-cart'});
        this.setState({background: 'background-black-product background-black-product-block'});
        this.props.loadProduct(this.state.product);
    }

    onRenderExitFullScreen = () =>{
        if(this.state.active === false){
            return; 
        }

        if(document.exitFullscreen){
            document.exitFullscreen();
        }else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }else if(document.msExitFullscreen){
            document.msExitFullscreen();
        }
        this.setState({active: false});
    }
    render(){
        return(
            <div onClick={this.onRenderExitFullScreen} className='container-section container-product-detail'>
            {
                <div className='container-new-detail'>
                    <div className='left-details'>
                        <img src={`${process.env.PUBLIC_URL}/img/${this.state.product.url}`} alt=''/>
                        <div onClick={this.onFullScreen} className='icon-bigger'>
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </div>
                    <div className='right-details'>
                        <p>{this.state.product.nameProduct}</p>
                        {
                            this.state.product.sale === null ? 
                            <p>${this.state.product.price}.00</p>
                            :  <p><span className='sale-price'>${this.state.product.sale}.00</span>${this.state.product.price}.00</p>
                        }
                        <p>{this.state.product.introduction}</p>
                        <div className='quantity'>
                            <input onChange={this.onQuantity} type='number' defaultValue='1' min='1' max='100'/>
                            <button onClick={this.onCart}>Add to cart</button>
                        </div>
                        <div className={this.state.background}></div>
                        <div className={this.state.nameClass}>
                            <div className='go-cart'>
                                <p>You added one item into your cart!</p>
                                <div className='links'>
                                    <Link to='/shop'><button className='button-1'>Shopping more!</button></Link>
                                    <Link to='/shop/cart'><button className='button-2'>Go to cart</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            }
            </div>
        )
    }
}

export default DetailProduct;