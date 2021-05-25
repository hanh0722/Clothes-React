import React, {useEffect} from 'react';
import {SectionData} from './sectiondata';
import SectionComponent from './sectionComponent';
import AOS from 'aos';

const Section = () =>{
    useEffect(() =>{
        AOS.init();
    }, [])

    const SectionContainer = SectionData.map((items, i) =>{
        return <SectionComponent key={i} url={items.img} name={items.name} content={items.content}/>
    })
    
    return(
        <div data-aos='fade-up' data-aos-duration='1000' className='container-inside'>
            <div className='text-inside'>
                <p className='title-text'>Latest new</p>
                <div className='container-section'>
                    <section className='section-1'>
                        {SectionContainer}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section;