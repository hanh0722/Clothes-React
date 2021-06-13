import React, { Fragment } from 'react';
import LineTable from './lineTable';
const LineTableList = ({listInvoices}) =>{
    const data = listInvoices.map((items, index) =>{
        const position = items.date.indexOf('T');
        const newText = items.date.slice(0, position);
        return <LineTable key={index} email={items.email} totalprice={items.totalprice} date={newText}/>
    })
    return(
        <Fragment>
            {data}
        </Fragment>
    )
}

export default LineTableList;