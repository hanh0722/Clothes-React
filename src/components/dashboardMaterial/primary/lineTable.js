import React from 'react';

const LineTable = ({email, totalprice, date}) =>{
    return (
        <tr>
            <td>{email}</td>
            <td>{totalprice} $</td>
            <td>{date}</td>
        </tr>
    )
}

export default LineTable;