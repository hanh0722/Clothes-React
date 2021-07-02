import React from 'react';
import {Link} from 'react-router-dom';

const Button = ({url}) =>{
    return(
        <Link to={`/shop/collection/${url}`}><button>Shop Now!</button></Link>
    )
}

export default Button;