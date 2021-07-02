import React from 'react';
import SectionComponent from './sectionComponent';
const SectionContainer = ({data}) =>{
    return(
        <>
        {
            data.map((items, i) =>{
            return <SectionComponent key={i} url={items.url} name={items.title} content={items.contentblog}/>
        })
        }
        </>
    )
}

export default SectionContainer;