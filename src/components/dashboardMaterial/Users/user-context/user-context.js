import React, {createContext, useState} from 'react';

const UserContext = createContext({
    setIdUserHandler: () => {}
});

export const UserContextProvider = (props) =>{
    const [idUser, setIdUser] = useState(60);
    const setIdUserHandler = (id) =>{
        setIdUser(id);
    }
    return(
        <UserContext.Provider value={{
            id: idUser,
            setIdUserHandler: setIdUserHandler
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext