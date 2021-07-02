import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
const BillContext = createContext({
    bills: []
})

export const BillContextProvider = (props) =>{
    const [bills, setBill] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/bill/year').then(data =>{
        setBill(data.data);
    }, []);
    })
    return <BillContext.Provider value={{
        bills: bills
    }}>
        {props.children}
    </BillContext.Provider>
}

export default BillContext;