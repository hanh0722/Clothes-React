import React from 'react';

const SectionComponent = ({url, name, content}) =>{
    return(
        <div className='box-introduce'>
            <img src={url} alt=''/>
            <div className='box-information'>
                <h3>{name}</h3>
                <p>{content}</p>
                <div className='line-information'></div>
                <p><a href="/#">Read more</a></p>
            </div>
        </div>
    )
}

export default SectionComponent;