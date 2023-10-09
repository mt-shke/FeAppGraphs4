import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const EchartsExample: React.FC = () => {
   const chartRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (!!chartRef.current) {
         const myChart = echarts.init(chartRef.current);
         option && myChart.setOption(option);
      }
   }, []);

   return <div ref={chartRef} className="w-[600px] h-[400px]" id="main"></div>;
};
export default EchartsExample;

const option = {
   title: {
      text: "Referer of a Website",
      subtext: "Fake Data",
      left: "center",
   },
   tooltip: {
      trigger: "item",
   },
   legend: {
      orient: "vertical",
      left: "left",
   },
   series: [
      {
         name: "Access From",
         type: "pie",
         radius: "50%",
         data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
         ],
         emphasis: {
            itemStyle: {
               shadowBlur: 10,
               shadowOffsetX: 0,
               shadowColor: "rgba(0, 0, 0, 0.5)",
            },
         },
      },
   ],
};
