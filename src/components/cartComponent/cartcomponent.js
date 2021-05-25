import React from 'react';

const CartComponent = ({url, name, price, quantity, removeItem, id}) =>{
    
    return(
        <tr>
            <td><img src={url} alt=''/></td>
            <td className='name-pd-cart'>{name}</td>
            <td>${price}.00</td>
            <td style={{textAlign: 'center'}}>
                {quantity} 
            </td>
                <td>${quantity * price}.00</td>
            <td onClick={() => removeItem(id)} className='delete-item'>Delete</td>
        </tr>
    )
    
}

export default CartComponent;