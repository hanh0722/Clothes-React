import React, {useState, useEffect} from 'react';
import '../scss/formFeedback.scss';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SuccessFeedback = ({notifyText, setBack}) =>{
    const [classForm, setClassForm] = useState('feedback_form');
    useEffect(() =>{
        if(notifyText === true){
            setClassForm('feedback_form translate_back')
        }
        else{
            setClassForm('feedback_form');
        }
    }, [notifyText])
    const setBackNotify = () =>{
        setBack();
    }
    return(
        <div className={classForm}>
            Thank you so much for your feedback, we received your feedback, we will continue improving 
            our service to bring the best experiences when you buy in our stores.
            <FontAwesomeIcon onClick={setBackNotify} icon={faTimesCircle}/>
        </div>
    )
}

export default SuccessFeedback;