import React from 'react';
import ProfitThisMonth from './ProfitThisMonth';
const Profit = ({data}) =>{
    return(
        <div className='right-setting'>
            <div className='profit-box'>
                <p>Profit This Month</p>
                <div className='profit__box'>
                    <ProfitThisMonth data={data}/>
                    <p className='profit__title'>Until today</p>
                </div>
            </div>
        </div>
    )
}

export default Profit