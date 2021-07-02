import React, {forwardRef} from 'react';

const Input = forwardRef((props, ref) =>{
    return(
        <>
            <label htmlFor={props.input.id}>{props.input.label}</label>
            <input ref={ref} {...props.input}/>
        </>
    )
})

export default React.memo(Input);