import React from 'react';
import Product from './Product';
import AOS from 'aos';
AOS.init({
    duration: 1000,
    offset: 200
})
class ListProduct extends React.Component {
    constructor(){
        super();
        this.state = {
            ListData: [],
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/recentproduct')
        .then(response => response.json())
        .then(data => {
            this.setState({ListData: data});
        })
    }
    ListComponent = () =>{
        const ListCard = this.state.ListData.map((items, i) =>{
            return <Product key={i} picture={require(`../img/${items.img}`).default} id={items.id} name={items.name} sale={items.sale} price={items.price}/>
        })
        return ListCard;
    }
    
    render(){
        return(
        <div className='container-inside'>
            <div className='text-inside'>
                <p className='title-text'>Recent Product</p>
                <div data-aos='zoom-in' className='container-section'>
                    <div className='all-product-recent'>
                        {this.ListComponent()}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ListProduct;