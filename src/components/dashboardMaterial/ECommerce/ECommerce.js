import React, { useEffect, useState } from "react";
import LayoutDashBoard from "../../Layout/LayoutDashboard";
import RightSide from "../RightSide/Rightside";
import BoxCheckingTop from "./BoxChecking";
import ChartValue from "./ChartValue";
import SaleOverView from "./SaleOverView";
import { BillContextProvider } from "../ContextInYearBill/context-bill";
import LatestProduct from "./LatestProduct";
import Container from './container/Container';
import Button from "../UI/Button";
import classes from '../BlogAdmin/BlogAdmin.module.scss';
import styles from './scss/AddProduct.module.scss';
const Ecommerce = () => {
  const [bills, setBills] = useState([]);
  const [billsLastMonth, setBillsLastMonth] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bill/month", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        date: new Date().getMonth() + 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBills(data);
      });
    fetch("http://localhost:3001/bill/month", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        date: new Date().getMonth(),
      }),
    })
      .then((response) => response.json())
      .then((data) => setBillsLastMonth(data));
  }, []);
  const totalBalance = bills.reduce((acc, items) => {
    return acc + Number(items.totalprice);
  }, 0);
  return (
    <LayoutDashBoard>
      <RightSide>
        <div className={`${classes.title} ${styles.button}`}>
          <Button link='/dashboard/admin/E-commerce/new-product' content='New Product'/>
        </div>
        <div className="box-customer">
          <BoxCheckingTop
            title="total bills this month"
            netIncome={bills.length}
          />
          <BoxCheckingTop
            title="total balance this month"
            netIncome={totalBalance}
          />
          <BoxCheckingTop
            title="total bills last month"
            netIncome={billsLastMonth.length}
          />
        </div>
        <BillContextProvider>
            <ChartValue />
            <Container>
              <SaleOverView />
              <LatestProduct/>
            </Container>
        </BillContextProvider>
      </RightSide>
    </LayoutDashBoard>
  );
};

export default React.memo(Ecommerce);
