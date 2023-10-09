// @ts-nocheck

import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { sortAndFormatDates } from "../../../utils/dates";

interface IEchartsAreaPiecesCustom {
   //    data?: Array<[string, number]>;
   data?: any;
}

const AreaPiecesCustom: React.FC<IEchartsAreaPiecesCustom> = ({ data }) => {
   const chartRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (!!chartRef.current) {
         const myChart = echarts.init(chartRef.current);
         if (!!data) {
            let newData = option;
            newData.series[0].data = sortAndFormatDates(data);
            option && myChart.setOption(newData);
            return;
         }
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
export default AreaPiecesCustom;

const option = {
   xAxis: {
      type: "category",
      boundaryGap: [0, "30%"],
   },
   yAxis: {
      type: "value",
      boundaryGap: [0, "30%"],
   },

   visualMap: {
      type: "piecewise",
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
         {
            gt: 1,
            lt: 3,
            color: "#F4A900",
         },
         {
            gt: 5,
            lt: 7,
            color: "#19bd00",
         },
      ],
   },
   series: [
      {
         type: "line",
         smooth: 0.6,
         symbol: "none",
         lineStyle: {
            color: "#0042f7",
            width: 5,
         },
         markLine: {
            symbol: ["none", "none"],
            label: { show: false },
            data: [
               { xAxis: 1 },
               { xAxis: 3 },
               { xAxis: 5 },
               { xAxis: 7 },
               { xAxis: 9 },
               { xAxis: 25 },
               { xAxis: 62 },
            ],
         },
         areaStyle: {},
         data: [
            ["2019-10-10", 200],
            ["2019-10-11", 560],
            ["2019-10-12", 750],
            ["2019-10-13", 580],
            ["2019-10-14", 250],
            ["2019-10-15", 300],
            ["2019-10-16", 450],
            ["2019-10-17", 300],
            ["2019-10-18", 865],
         ],
      },
   ],
};
