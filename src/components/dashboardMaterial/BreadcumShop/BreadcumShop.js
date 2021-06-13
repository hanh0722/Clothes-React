import React from 'react';
import './BreadcumShop.scss';
const BreadCumShop = ({quantity, handlerSort}) =>{
    

    const changeSortHandler = (event) =>{
        handlerSort(event.target.selectedIndex);
    }

    return(
        <div className='title__bread'>
            <p>Showing all {quantity} items</p>
            <select onChange={changeSortHandler}>
                <option id='1' value='default'>Default</option>
                <option id='2' value='low-to-high'>Low To High</option>
                <option id='3' value='high-to-low'>High To Low</option>
                <option id='4' value='newest'>Newest</option>
            </select>
        </div>
    )
}

export default BreadCumShop;