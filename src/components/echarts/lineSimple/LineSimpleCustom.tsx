// @ts-nocheck

import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { sortAndFormatToEchartsData } from "../../../utils/dates";

interface IEchartsLineSimpleCustom {
   //    data?: Array<[string, number]>;
   data?: any;
}

const LineSimpleCustom: React.FC<IEchartsLineSimpleCustom> = ({ data }) => {
   const chartRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (!!chartRef.current) {
         const myChart = echarts.init(chartRef.current);
         const updatedData = sortAndFormatToEchartsData(data);
         const dataNums = updatedData.flatMap((d: any) => d[1]) as number[];
         const dataStrings = updatedData.flatMap((d: any) => d[0]) as string[];
         option.series[0].data = [...dataNums];
         option.xAxis.data = dataStrings;
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
export default LineSimpleCustom;

let option = {
   backgroundColor: {
      type: "radial",
      x: 0.3,
      y: 0.3,
      r: 0.8,
      colorStops: [
         {
            offset: 0,
            color: "#f7f8fa",
         },
         {
            offset: 1,
            color: "#cdd0d5",
         },
      ],
   },
   title: {
      text: "Line Simple Custom",
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
         data: [150, 230, 224, 218, 135, 147, 260],
         type: "line",
      },
   ],
};
