import React from 'react';

const SliderComponent = ({Slider}) =>{
    return(
            <div className = 'image-loading'>
                <img src={Slider} alt='' loading='lazy'/>
                <div className='introduction'>
                    <h2>Pick your size</h2>
                    <p className='name-products'>Womens Wear Collections</p>
                    <div className='line'></div>
                    <p className='details'>Praesent elementum nisl ac augue pret feugiat neque Mauris luctus tellus a nisi consectetur.</p>
                    <button>Read more</button>
                </div>
            </div>
    )
}

export default SliderComponent;