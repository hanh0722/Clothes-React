import React from 'react';

const Card = (props) =>{
    return(
        <div className='container-admin'>
            {props.children}
        </div>
    )
}

export default Card;