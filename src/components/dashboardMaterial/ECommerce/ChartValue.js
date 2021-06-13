import React, {useState, useEffect} from 'react';
import '../scss/Chart.scss';
import ContainerChart from './ContainerChart';
import ChartComponent from '../ChartComponent/ChartComponent';


const ChartValue = () =>{ 
    const [bills, setBill] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3001/bill/year').then(response => response.json())
        .then(data =>{
            setBill(data);
        })
        .catch(err => console.log(err));
    }, []);
    return( 
        <div className='box-customer'>
            <ContainerChart className='user-checking chartJS' title='Total With Last Month'>
                <ChartComponent 
                dataBill={bills}
                />
            </ContainerChart>
        </div>
    )
}

export default ChartValue;