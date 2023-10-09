import ReactECharts from "echarts-for-react";
interface IChartData {
   data: any;
}

const RadarChart: React.FC<IChartData> = ({ data }) => {
   const options = {
      title: {
         text: "Radar Chart",
         left: "center",
      },
      tooltip: {
         trigger: "item",
      },
      radar: {
         indicator: [...data],
         center: ["50%", "50%"],
         radius: "60%",
      },
      series: [
         {
            name: "Data",
            type: "radar",
            data: data,
         },
      ],
   };

   return <ReactECharts option={options} />;
};

export default RadarChart;
