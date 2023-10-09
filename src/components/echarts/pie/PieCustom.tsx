import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const PieCustom: React.FC<IEchartsPieOptions> = ({ data }) => {
   const chartRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (!!chartRef.current) {
         let chart: echarts.ECharts | undefined;
         const myChart = echarts.init(chartRef.current);
         data && myChart.setOption({ ...data });
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
export default PieCustom;

// https://echarts.apache.org/examples/en/editor.html?c=pie-simple

export interface IEchartsPieOptions {
   data: {
      title: {
         text: string;
         subtext: string;
         left: string;
      };
      tooltip: {
         trigger: string;
      };
      legend: {
         orient: string;
         left: string;
      };
      series: {
         name: string;
         type: string;
         radius: string;
         data: {
            value: number;
            name: string;
         }[];
         emphasis: {
            itemStyle: {
               shadowBlur: number;
               shadowOffsetX: number;
               shadowColor: string;
            };
         };
      }[];
   };
}
