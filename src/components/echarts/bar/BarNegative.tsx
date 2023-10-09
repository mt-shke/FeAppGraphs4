// @ts-nocheck

import * as echarts from "echarts";
import { useEffect, useRef } from "react";

interface IEchartsLineSimpleCustom {
   data?: any;
}

const BarNegative: React.FC<IEchartsLineSimpleCustom> = ({ data }) => {
   const chartRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (!!chartRef.current) {
         const myChart = echarts.init(chartRef.current);
         const sortedData = sortEchartsDa(data).filter((el, ind) => ind < 20);
         const updatedData = sortedData.map((data) =>
            data[2] === "buy"
               ? { value: -Number(data[1]), label: labelRight }
               : data[1]
         );
         const dataDescription = sortedData.map((data) => data[3] as string[]);

         option.series[0].data = [...updatedData];
         option.yAxis.data = [...dataDescription];
         option && myChart.setOption(option);
      }
   }, [data]);

   return (
      <div
         ref={chartRef}
         className="bg-slate-300 w-[600px] h-[400px]"
         id="main"
      ></div>
   );
};

export default BarNegative;

const labelRight = {
   position: "right",
} as const;

let option = {
   title: {
      text: "Bar Chart with Negative Value",
   },
   tooltip: {
      trigger: "axis",
      axisPointer: {
         type: "shadow",
      },
   },
   grid: {
      top: 80,
      bottom: 30,
   },
   xAxis: {
      type: "value",
      position: "top",
      splitLine: {
         lineStyle: {
            type: "dashed",
         },
      },
   },
   yAxis: {
      type: "category",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: [
         "ten",
         "nine",
         "eight",
         "seven",
         "six",
         "five",
         "four",
         "three",
         "two",
         "one",
      ],
   },
   series: [
      {
         name: "Cost",
         type: "bar",
         stack: "Total",
         label: {
            show: true,
            formatter: "{b}",
         },
         data: [
            { value: -0.07, label: labelRight },
            { value: -0.09, label: labelRight },
            0.2,
            0.44,
            { value: -0.23, label: labelRight },
            0.08,
            { value: -0.17, label: labelRight },
            0.47,
            { value: -0.36, label: labelRight },
            0.18,
         ],
      },
   ],
};
