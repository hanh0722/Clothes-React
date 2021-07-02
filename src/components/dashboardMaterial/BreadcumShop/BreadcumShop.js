import React, { useState, useEffect } from 'react';
import './BreadcumShop.scss';
import {useHistory} from 'react-router-dom';
const BreadCumShop = ({handlerSort, item}) =>{
    const [urls, setUrls] = useState('default');
    let history = useHistory();
    useEffect(() =>{
        history.push(`/shop/?sortby=${urls}`)
    }, [history, urls])
    const changeSortHandler = (event) =>{
        handlerSort(event.target.selectedIndex);
        setUrls(event.target.value);
    }
    return(
        <div className='title__bread'>
            <p>Showing all {item} items</p>
            <select onChange={changeSortHandler}>
                <option id='1' value='default'>Default</option>
                <option id='2' value='low-to-high'>Low To High</option>
                <option id='3' value='high-to-low'>High To Low</option>
                <option id='4' value='newest'>Newest</option>
                <option id='5' value='man'>Man</option>
                <option id='6' value='woman'>Woman</option>
            </select>
        </div>
    )
}

export default BreadCumShop;