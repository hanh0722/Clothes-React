import React, {useState, useEffect} from 'react';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ShowUpImage = ({url, check, setCheck}) =>{
    const [classItem, setClassItem] = useState('show-up-image');
    useEffect(() =>{
        if(check === true){
            setClassItem('show-up-image show-up-again');
        }
        else{
            setClassItem('show-up-image');
        }
    }, [check])
    return(
        <div className={classItem}>
            <p>Changed successfully</p>
            <img alt='' src={`${process.env.PUBLIC_URL}/img/${url}`}/>
            <FontAwesomeIcon onClick={setCheck} icon={faTimesCircle}/>
        </div>
    )
}

export default ShowUpImage;