import React, { Component } from "react";
import Chart from "react-apexcharts";


class ChartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1,2,3,4,5,6]
        },
        colors: ['rgb(255, 193, 7)', 'rgb(0, 171, 85)']
      },
      series: [
        {
          name: "Income",
          data: this.props.dataBill,
        },
        {
          name: 'Bills',
          data: [1,2,3,4,5,6]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type='line'
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartComponent;