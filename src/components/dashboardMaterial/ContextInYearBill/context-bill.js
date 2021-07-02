import React, {createContext, useState, useEffect} from 'react';
const BillContext = createContext({
    bills: []
})

export const BillContextProvider = (props) =>{
    const [bills, setBill] = useState([]);
    useEffect(() =>{
       fetch('http://localhost:3001/bill/year').then(response => response.json())
       .then(data =>{
           console.log(data);
           setBill(data);
       })
    }, []);
    
    return <BillContext.Provider value={{
        bills: bills
    }}>
        {props.children}
    </BillContext.Provider>
}

export default BillContext;