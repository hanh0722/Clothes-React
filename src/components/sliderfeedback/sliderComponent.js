import React from 'react';

const SliderComponent = ({content, name, position, company}) =>{
    return (
        <div>
            <div className='container-fb'>
                <p>{content}</p>
                <p className='position-fb'><span>{company}</span> , {position}</p>
            </div>
            <p className='name-fb'>{name}</p>
        </div>
    )
}

export default SliderComponent;