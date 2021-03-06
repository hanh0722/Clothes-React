import React, {useEffect, useState} from 'react';
import BoxChecking from '../CheckCustomer/checkCustomer';
import {number, title} from '../primary/data';
import { Line } from 'react-chartjs-2';
import LineTableList from '../primary/LineTableList';
import Profit from '../ProfitTable/Profit';
import LayoutDashBoard from '../../Layout/LayoutDashboard';
import RightSide from '../RightSide/Rightside';
import WelcomeAdmin from '../Welcome/Welcome';
const fetchData = (url) =>{
  const data = fetch(url).then(response => response.json())
  return data;
}
const HomePage = ({ onNumberBlog, onName}) =>{
    const [bills, setBill] = useState([]);
    const [invoices, setInvoice] = useState([]);
    const [feedbacks, setFeedBacks] = useState([]);
    useEffect(() =>{
      fetchData('http://localhost:3001/calculate/bill')
      .then(data => {
        setBill(data);
      })
      .catch(err => console.log(err));

      fetchData('http://localhost:3001/invoice/bill')
      .then(data =>{
        setInvoice(data);
      }).catch(err => console.log(err));

      fetchData('http://localhost:3001/customer/feedback')
      .then(data =>{
        setFeedBacks(data);
      }).catch(err => console.log(err));
    }, []);
    
    const box = number.map((items, index) =>{
        if(index < 1){
          return <BoxChecking key={index} number={feedbacks.length} title={title[index]}/>
        }
        else if(index === 1){
          return <BoxChecking key={index} number={onNumberBlog.length} title={title[index]}/>
        }
        else{
          return <BoxChecking key={index} number={bills.length} title={title[index]}/>
        }
    });

    const data = {
      labels: [1, 2 ,3 ,4 ,5 ,6],
      datasets: [
        {
          label: 'Bills',
          data: [1,2,3,4,5,6],
          fill: false,
          borderColor: '#febb00',
        },
      ],
    };
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    return(
      <LayoutDashBoard>
      <RightSide>
      <WelcomeAdmin onName={onName} />
        <div className='first-admin'>
            <div className='box-customer'>
                {box}
            </div>
            <div className='chart'>
                <p>Bills Of Months</p>
                <Line data={data} options={options} />
            </div>
            <div className='invoice'>
              <p>New Invoice</p>
              <table className='table-invoice'>
                <tbody>
                  <tr className='title-table'>
                    <th>Invoice id</th>
                    <th>Price</th>
                    <th>Date</th>
                  </tr>
                  <LineTableList listInvoices={invoices}/>
                </tbody>
              </table>
            </div>
            <div className='container-homepage'>
              <Profit data={bills}/>
            </div>
        </div>
        </RightSide>
      </LayoutDashBoard>
    )
}

export default HomePage