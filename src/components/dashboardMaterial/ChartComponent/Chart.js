import React from 'react';
import Chart from 'react-apexcharts';
const ChartContainer = ({options, series}) =>{
    return(
        <Chart 
        options={options}
        series={series}
        type='line'
        width='100%'
        />
    )
}

export default ChartContainer;