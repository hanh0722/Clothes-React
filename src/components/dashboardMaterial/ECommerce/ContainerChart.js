import React from 'react';

const ContainerChart = (props) =>{
    return(
        <div className={props.className}>
            <p>{props.title}</p>
            {props.children}
        </div>
    )
}

export default ContainerChart;