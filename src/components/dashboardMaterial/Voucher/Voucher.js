import React, {useState} from 'react';
import styles from './Voucher.module.scss'
import TableVoucher from './TableVoucher';

const Voucher = ({voucherHandler}) =>{
    const [voucher, setVoucher] =  useState(false);
    const changeVoucherHandler = () =>{
        setVoucher(prevState =>{
            return prevState = !prevState;
        });
    }
    return(
        <div className={styles.voucher}>
            <p>You have voucher? <span onClick={changeVoucherHandler}>Apply now!</span></p>
            <TableVoucher changeHandler={voucherHandler} isClicked={voucher}/>
        </div>
    )
}

export default Voucher