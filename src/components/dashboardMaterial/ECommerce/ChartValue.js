import React, {useContext} from "react";
import "../scss/Chart.scss";
import ContainerChart from "./ContainerChart";
import ChartComponent from "../ChartComponent/ChartComponent";
import BillContext from "../ContextInYearBill/context-bill";
const ChartValue = () => {
    const BillCtx = useContext(BillContext);
  return (
    <div className="box-customer">
      <ContainerChart
        className="user-checking chartJS"
        title="Total With Last Month"
      >
        <ChartComponent value={BillCtx.bills}/>
      </ContainerChart>
    </div>
  );
};

export default React.memo(ChartValue);
