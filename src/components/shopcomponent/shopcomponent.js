import React from 'react';
import {Link} from 'react-router-dom';
class ShopComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            chosen: [],
            nameProduct: '',
        }
    }
    componentDidMount(){
        this.setState({name: this.props.name});
    }
    setLink = () =>{
        // we can't setState because setState is callback function => it makes sessionStorage can't save immediately
        // after callback Click event
        this.setState({name: this.props.name});
        sessionStorage.setItem('informationProduct', this.state.name);
    }
    render(){
        return(
            <div id={this.props.id} onClick={this.setLink} className='card-component'>
                <Link to={`/shop/${this.props.name}`}><img src={this.props.url} alt='' loading='lazy'/></Link>
                <div className='infor-card'>
                    <p>{this.props.name}</p>
                    {
                        this.props.sale !== null ? 
                        <p><span>${this.props.sale}.00</span>${this.props.price}.00</p>
                        : <p>${this.props.price}.00</p>
                    }
                </div>
            </div>
        )
    }
}

export default ShopComponent;