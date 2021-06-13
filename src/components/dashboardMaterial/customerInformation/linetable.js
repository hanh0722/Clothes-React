import React from 'react';

const LineTable  = ({number, name, bill, date}) =>{
    return(
        <tr>
            <td>{number}</td>
            <td>{name}</td>
            <td>{bill}</td>
            <td>{date}</td>
        </tr>
    )
}

export default LineTable;