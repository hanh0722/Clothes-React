import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import RightSide from '../../RightSide/Rightside';
import LayoutDashBoard from '../../../Layout/LayoutDashboard';
import ViewUser from './ViewUser';
const UserDetail = () =>{
    const [dataUser, setDataUser] = useState({});
    const userInformation = useParams();
    useEffect(() =>{
        fetch(`http://localhost:3001/user/${userInformation.id}`)
        .then(response => response.json())
        .then(data =>{
            if(data.id){
                setDataUser(data);
            }
        }).catch(err => console.log(err));
    }, [userInformation.id])
    return(
        <LayoutDashBoard>
            <RightSide>
                <ViewUser data={dataUser}/>
            </RightSide>
        </LayoutDashBoard>
    )
}

export default UserDetail;