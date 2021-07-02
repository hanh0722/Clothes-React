import React, {createContext} from 'react';

const VoucherContext = createContext({
    percent: 0
});

const VoucherContextProvider = (props) =>{
    return(
        <VoucherContext.Provider value={{percent: percent}}>
            {props.children}
        </VoucherContext.Provider>
    )
}