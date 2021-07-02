import React from 'react';

const FeedbackRight = ({picture, name}) =>{
    return(
        <div className='timeline timeline-2'>
            <div className='bubble'></div>
            <div className='left-timeline'>
                <div className='timeline-img'>
                    <img src={picture} alt='' loading='lazy'/>
                </div>
                <div className='content-timeline'>
                    <p className='title-timeline-name'>{name}</p>
                    <p className='content-timeline-inside'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum augue vitae mauris accumsan, eu ultrices nisi luctus. Vivamus iaculis molestie scelerisque. Praesent a…</p>
                </div>
            </div>
        </div>
    )
}

export default FeedbackRight;