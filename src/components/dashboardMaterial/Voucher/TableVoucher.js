import React, {useReducer} from 'react';
import styles from './TableVoucher.module.scss';
import axios from 'axios';

const ACTION = {
    INPUT_VOUCHER: 'INPUT_VOUCHER',
    VALID_VOUCHER: 'VALID_VOUCHER',
    INVALID_VOUCHER: 'INVALID_VOUCHER'
}
const voucherReducer = (state, action) =>{
    switch(action.type){
        case ACTION.INPUT_VOUCHER:
            return {
                isValid: true,
                inputVoucher: action.payload,
                validVoucher: false,
                invalidVoucher: false
            }
        case ACTION.VALID_VOUCHER:
            return {
                isValid: true,
                inputVoucher: '',
                validVoucher: true,
                invalidVoucher: false
            }
        case ACTION.INVALID_VOUCHER:
            return{
                isValid: false,
                inputVoucher: '',
                validVoucher: false,
                invalidVoucher: true
            }
        default:
            return state
    }
}
const TableVoucher = ({isClicked, changeHandler}) =>{
    const [voucherState, voucherDispatch] = useReducer(voucherReducer, {
        isValid: true,
        inputVoucher: '',
        validVoucher: false,
        invalidVoucher: false
    })
    const voucherHandler = (event) =>{
        voucherDispatch({
            type: ACTION.INPUT_VOUCHER,
            payload: event.target.value
        })
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3001/voucher', {
            voucher: voucherState.inputVoucher
        }).then(data =>{
            if(data.data.id){
                voucherDispatch({
                    type: ACTION.VALID_VOUCHER
                })
                changeHandler(data.data.percent);
            }
            else{
                voucherDispatch({
                    type: ACTION.INVALID_VOUCHER
                })
                changeHandler(0);
            }
        }).catch(err => console.log(err));
    }
    return(
        <form onSubmit={submitHandler} className={`${styles.tableVoucher} ${isClicked === true && styles.voucher}`}>
            <input value={voucherState.inputVoucher} onChange={voucherHandler} className={`${!voucherState.isValid && styles.invalid}`} type='text' placeholder='Enter Voucher...'/>
            {
                voucherState.validVoucher === true && <p style={{marginTop: '10px'} }>Voucher accepted!</p>
            }
            {
                voucherState.invalidVoucher === true && <p style={{marginTop: '10px'} }>Invalid voucher!</p>
            }
            <div className={styles['submit_button']}>
                <button>Apply</button>
            </div>
        </form>
    )
}

export default TableVoucher;