import React from 'react';
import Card from '../dashboardMaterial/Card/Card';
import DashboardAdmin from '../Pages/dashboardAdmin';
const LayoutDashBoard = (props) =>{
    return(
        <>
            <Card>
                <DashboardAdmin/>
                {props.children}
            </Card>
        </>
    )
}

export default LayoutDashBoard;