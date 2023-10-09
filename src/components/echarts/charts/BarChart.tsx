import ReactECharts from "echarts-for-react";
import React from "react";

interface IChartData {
   data: any;
}

const BarChart: React.FC<IChartData> = ({ data }) => {
   const options = {
      title: {
         text: "Bar Chart",
         left: "center",
      },
      tooltip: {
         trigger: "axis",
         axisPointer: {
            type: "shadow",
         },
         formatter: "{b}: {c}",
      },
      xAxis: {
         type: "category",
         data: data.map((item: any) => item.symbol),
      },
      yAxis: {
         type: "value",
         name: "Value",
      },
      series: [
         {
            name: "Category",
            type: "bar",
            data: data.map((item: any) => item.amount),
         },
      ],
   };

   return <ReactECharts option={options} />;
};

export default BarChart;
