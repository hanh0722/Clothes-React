import React from 'react';

const TotalCart = ({check, total}) =>{
    const TotalPrice = total.reduce((acc, items) =>{
        return acc + items.price * items.quantity;
    }, 0);
    return(
        <div className='product-categories'>
            <p>Cart total</p>
            <div className='line-categories'></div>
            {
                check.length !== 0 ? 
                <table className='table-2'>
                    <tbody>
                        <tr>
                            <td>Quantity items</td>
                            <td>{total.length}</td>
                        </tr>
                        <tr>
                            <td>Subtotal</td>
                            <td>${TotalPrice}.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${TotalPrice}.00</td>
                        </tr>
                    </tbody>
                </table>
                : (
                    <p className='empty-title-check'>Your cart is empty</p>
                )
            }
        </div>
    )
}

export default TotalCart;