import React, {useEffect, useState} from 'react';
import SectionContainer from './SectionContainer'
import AOS from 'aos';

const Section = () =>{
    const [news, setNews] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3001/blog').then(response => response.json())
        .then(data => {
            const array = [];
            for(let i = 0; i <= 2; i++){
                array.push(data[i]);
            }
            setNews(array);
        })
        AOS.init();
    }, [])
    
    return(
        <div data-aos='fade-up' data-aos-duration='1000' className='container-inside'>
            <div className='text-inside'>
                <p className='title-text'>Latest new</p>
                <div className='container-section'>
                    <section className='section-1'>
                        <SectionContainer data={news}/>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section;