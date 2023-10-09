import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const LineSimple: React.FC = () => {
   const chartRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (!!chartRef.current) {
         const myChart = echarts.init(chartRef.current);
         option && myChart.setOption(option);
      }
   }, []);

   return (
      <div
         ref={chartRef}
         className="bg-slate-300 w-[600px] h-[400px]"
         id="main"
      ></div>
   );
};
export default LineSimple;

// https://echarts.apache.org/examples/en/editor.html?c=pie-simple

const option = {
   xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
   },
   yAxis: {
      type: "value",
   },
   series: [
      {
         data: [150, 230, 224, 218, 135, 147, 260],
         type: "line",
      },
   ],
};
