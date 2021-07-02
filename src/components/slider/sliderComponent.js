import React from 'react';
import { Link } from 'react-router-dom';
const SliderComponent = ({Slider, path, content}) =>{
    return(
            <div className = 'image-loading'>
                <img src={Slider} alt='' loading='lazy'/>
                <div className='introduction'>
                    <h2>Pick your size</h2>
                    <p className='name-products'>{content} Collections</p>
                    <div className='line'></div>
                    <p className='details'>Praesent elementum nisl ac augue pret feugiat neque Mauris luctus tellus a nisi consectetur.</p>
                    <Link to={`/shop/collection/${path}`}><button>Read more</button></Link>
                </div>
            </div>
    )
}

export default SliderComponent;