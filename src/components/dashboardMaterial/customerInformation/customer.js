import React, { useState, useEffect} from "react";
import LineTable from "./linetable";
const InformationCustomer = () =>{
    const [user, setUser] = useState({});
    const [bills, setBills] = useState([]);
    useEffect(() =>{
        if(localStorage.getItem('email') === null)
        return;

        fetch('http://localhost:3001/information/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: JSON.parse(localStorage.getItem('email'))
            })
        }).then(response => response.json())
        .then(data => setUser(data))
        .catch(err => console.log(err));

        fetch('http://localhost:3001/user/bill', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: JSON.parse(localStorage.getItem('email'))
            })
        }).then(response => response.json())
        .then(data => {
            setBills(data);
        });
    }, [])

    const dataBill = bills.map((items, i) =>{
        return <LineTable key={i} 
        number={i + 1} 
        name={`${items.firstname} ${items.lastname}`} 
        bill={items.items} 
        date={items.date}/>
    })
    return(
        <div className='container-section container-customer'>
            <div className='left-sidebar'>
                <div className='icon-user'>
                    <img alt='avatar' src={`${process.env.PUBLIC_URL}/img/avatar.png`}/>
                </div>
                <ul>
                    <li>Username: {user.email}</li>
                    <li>Name: {user.name}</li>
                    <li>Age: {user.age}</li>
                    <li>Total Bills: {bills.length}</li>
                </ul>
            </div>
            <div className='right-sidebar'>
                <div className='box-sidebar'>
                    <table>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Bill</th>
                                <th>Date</th>
                            </tr>
                            {dataBill}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default InformationCustomer;