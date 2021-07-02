import React from 'react';

const ProfitThisMonth = ({data}) =>{
    console.log(data);
    const newData = data.filter(items =>{
        const date = items.date;
        const position = date.indexOf(new Date().getMonth() + 1);
        return position === 5;
    });
    const summary = newData.reduce((acc, items) =>{
        return acc + Number(items.totalprice);
    }, 0);
    return(
        <div className='number'>
            ${summary}
        </div>
    )
}

export default ProfitThisMonth;