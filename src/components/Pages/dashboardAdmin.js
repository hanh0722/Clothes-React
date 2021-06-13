import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {faSlidersH} from '@fortawesome/free-solid-svg-icons'
import '../scss/admin.scss';
import {generalData, appData, managementData} from '../dashboardMaterial/primary/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const generateMap = (array, showUp) =>{
    const newArray = array.map((items, index) =>{
        return <Link onClick={showUp} key={index} to={`/dashboard/admin/${items.content}`}>
            <li>
                <span>{items.svg}</span>
                {items.content}
            </li>
        </Link>
    })
    return newArray
}
const DashboardAdmin = () =>{
    const [firstClass, setFirstClass] = useState('sidebar-admin');
    const [backgroundClass, setBackgroundClass] = useState('background-sidebar');
    const showUp = () =>{
        if(firstClass === 'sidebar-admin'){
            setFirstClass('sidebar-admin show-up-sidebar');
            setBackgroundClass('background-sidebar show-up-background');
        }
        else{
            setFirstClass('sidebar-admin');
            setBackgroundClass('background-sidebar');
        }
    }
    const generalAdmin = generateMap(generalData, showUp);
    const managementAdmin = generateMap(managementData, showUp);
    const appAdmin = generateMap(appData, showUp);
    return(
        <Fragment>
            <div className={firstClass}>
                <div className='logo-sidebar-admin'>
                    <Link to='/dashboard/admin/app'>
                        <img alt='logo' src={`${process.env.PUBLIC_URL}/img/admin-logo.png`}/>
                    </Link>
                </div>
                <div className='general-container'>
                    <p>General</p>
                    <ul className='general'>
                        {generalAdmin}
                    </ul>
                    <p>Management</p>
                    <ul>
                        {managementAdmin}
                    </ul>
                    <p>App</p>
                    <ul>
                        {appAdmin}
                    </ul>
                </div>
            </div>
            <div onClick={showUp} className={backgroundClass}></div>
            <div className='setting'>
                <FontAwesomeIcon onClick={showUp} icon={faSlidersH}/>
            </div>
        </Fragment>
    )
}

export default DashboardAdmin;