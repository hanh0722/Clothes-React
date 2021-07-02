import React, { useEffect, useState } from "react";
import Line from "./Line";
import styles from "./scss/LineChart.module.scss";
const filterMonth = (array, date) => {
  const newArray = array.filter((bill) => {
    return bill.date.indexOf(date) === 5;
  });
  return newArray;
};
const reduceBill = (array) => {
  return array.reduce((acc, bill) => {
    return acc + +bill.totalprice;
  }, 0);
};
const LineChart = () => {
  const [billThisMonth, setBillThisMonth] = useState(0);
  const [billLastMonth, setBillsLastMonth] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3001/bill/year")
      .then((response) => response.json())
      .then((data) => {
        let date = new Date().getMonth() + 1;
        if (date < 10) {
          date = `0${date}`;
        }
        const date1 = new Date();
        date1.setDate(1);
        date1.setMonth(date1.getMonth() - 1);
        let lastMonth = date1.getMonth() + 1;
        if (lastMonth < 10) {
          lastMonth = `0${lastMonth}`;
        }
        const thisMonthBills = filterMonth(data, date);
        setBillThisMonth(reduceBill(thisMonthBills));
        const lastMonthBills = filterMonth(data, lastMonth);
        setBillsLastMonth(reduceBill(lastMonthBills));
        setTotal(reduceBill(data));
      });
  }, []);
  const data = [
    {
      title: "Total Profit",
      total: total,
      value: "100%",
      background: "#febb00",
    },
    {
      title: "Last Month",
      total: billLastMonth,
      value: billLastMonth > total ? '100%' : `${Math.round(billLastMonth/total)*100}%`,
      background: "rgb(24, 144, 255)",
    },
    {
      title: "This Month",
      total: billThisMonth,
      value: billThisMonth > total ? '100%' : `${Math.round(billThisMonth/total)*100}%`,
      background: "rgb(0, 171, 85)",
    },
  ];
  const LineContainer = data.map((item, index) => {
    return (
      <Line
        key={index}
        title={item.title}
        total={item.total}
        value={item.value}
        background={item.background}
        percent={item.value}
      />
    );
  });
  return (
    <>
      <div className={styles.box}>
        {LineContainer}
      </div>
    </>
  );
};

export default React.memo(LineChart);
