import React from 'react';
import FeedbackLeft from './feedback';
import FeedbackRight from './feedback2';
import img1 from '../img/demo-1.jpg';
import img2 from '../img/demo-2.jpg';
import img3 from '../img/demo-3.jpg';
import img4 from '../img/demo-4.jpg';
const FeedbackAll = () =>{
    const data = [
        {
            name: 'AENEAN TEMPUS AC URNA',
            picture: img1
        },
        {
            name: 'IACULIS MOLESTIE SCELERISQUE',
            picture: img2
        },
        {
            name: 'TRISTIQUE MAGNA ET',
            picture: img3
        },
        {
            name: 'CONSECTETUR ADIPISCING ELIT',
            picture: img4
        }
    ]
    const container = data.map((items, i) =>{
        if(i % 2 === 0){
            return <FeedbackLeft key={i} name={items.name} picture={items.picture}/>
        }else{
            return <FeedbackRight key={i} name={items.name} picture={items.picture}/>
        }
    });
    return(
        <div data-aos-offset='120' data-aos-duration='1000' data-aos-delay='500' data-aos='fade-up' className='container-img'>
            <p className='title-timeline'>Post Timeline</p>
            <div className='container-all-timeline'>
                <div className='container-timeline'>
                    {container}
                </div>
            </div>
        </div>
    )
}

export default FeedbackAll;