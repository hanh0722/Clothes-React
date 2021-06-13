import React, {useEffect, useState} from 'react';
import BoxCheckingTop from './BoxChecking';
import ChartValue from './ChartValue';
const Ecommerce = () =>{
    const [bills, setBills] = useState([]);
    const [billsLastMonth, setBillsLastMonth] = useState([]);
    
    useEffect(() =>{
        fetch('http://localhost:3001/bill/month', {
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({
                date: new Date().getMonth() + 1
            })
        }).then(response => response.json())
        .then(data => setBills(data));
        fetch('http://localhost:3001/bill/month', {
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({
                date: new Date().getMonth()
            })
        }).then(response => response.json())
        .then(data => setBillsLastMonth(data))
    }, [])
    const totalBalance = bills.reduce((acc, items) =>{
        return acc + items.totalprice 
    }, 0);
    return(
       <div>
            <div className='box-customer'>
                <BoxCheckingTop
                title='total bills this month'
                netIncome={bills.length}
                />   
                <BoxCheckingTop
                title='total balance this month'
                netIncome={totalBalance}
                />
                <BoxCheckingTop
                title='total bills last month'
                netIncome={billsLastMonth.length}
                />
            </div> 
            <ChartValue/>        
        </div>
    )
}

export default Ecommerce;