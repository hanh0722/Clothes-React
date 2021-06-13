import React from 'react';
import BoxChecking from '../CheckCustomer/checkCustomer';
const BoxCheckingTop = ({netIncome, title}) =>{
    return(
       
        <BoxChecking
        title={title} 
        number={netIncome}
        />
        
    )
}

export default BoxCheckingTop