import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const Bar: React.FC = () => {
   const chartRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (!!chartRef.current) {
         const myChart = echarts.init(chartRef.current);
         option && myChart.setOption(option);
      }
   }, []);

   return <div ref={chartRef} className="w-[600px] h-[400px]" id="main"></div>;
};
export default Bar;

type EChartsOption = echarts.EChartsOption;

let option: EChartsOption;

option = {
   gradientColor: {
      0: "#F4A900",
      1: "#FF2301",
      2: "#EDFF21",
   },
   xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
   },
   yAxis: {
      type: "value",
   },
   series: [
      {
         type: "bar",
         data: [120, 200, 150, 80, 70, 110, 130],
         showBackground: true,
         backgroundStyle: {
            color: "#F4A900",
         },
      },
   ],
};

// option = {
//    xAxis: {
//      type: 'category',
//      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//    },
//    yAxis: {
//      type: 'value'
//    },
//    series: [
//      {
//        data: [120, 200, 150, 80, 70, 110, 130],
//        type: 'bar',
//        showBackground: true,
//        backgroundStyle: {
//          color: 'rgba(180, 180, 180, 0.2)'
//        }
//      }
//    ]
//  };
