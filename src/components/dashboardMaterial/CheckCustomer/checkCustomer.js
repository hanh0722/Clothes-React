import React from 'react';

const BoxChecking = ({number, title}) =>{
    return(
        <div className='user-checking'>
            <p>{title}</p>
            <p style={{letterSpacing: '2px'}}>{number}</p>
        </div>
    )
}

export default BoxChecking;