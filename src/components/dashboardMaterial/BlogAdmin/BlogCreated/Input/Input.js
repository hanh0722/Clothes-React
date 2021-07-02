import React from 'react';

const Input = (props) =>{
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props.input}/>
        </>
    )
}

export default Input;