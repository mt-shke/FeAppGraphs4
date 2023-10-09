import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

interface IChartData {
   data: any;
}

const NegativeBarChart: React.FC<IChartData> = ({ data }) => {
   const options: EChartsOption = {
      title: {
         text: "Negative Bar Chart",
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
         type: "value",
         name: "Value",
         axisLabel: {
            formatter: "{value} %",
         },
         splitLine: {
            show: false,
         },
      },
      yAxis: {
         type: "category",
         data: data.map((item: any) => item.symbol),
      },
      series: [
         {
            name: "Category",
            type: "bar",
            data: data,
            barWidth: 10,
            itemStyle: {
               // color: (params: any) => {
               //    const value = params.data.value;
               //    return value > 0 ? "#d16c6c" : "#67c23a";
               // },
            },
         },
      ],
   };

   return <ReactECharts option={options} />;
};

export default NegativeBarChart;
