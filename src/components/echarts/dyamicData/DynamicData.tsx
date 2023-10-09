// @ts-nocheck

import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { sortAndFormatToEchartsData } from "../../../utils/dates";

interface IEchartsData {
   //    data?: Array<[string, number]>;
   data?: any;
}

const DynamicData: React.FC<IEchartsData> = ({ data }) => {
   const chartRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (!!chartRef.current) {
         const myChart = echarts.init(chartRef.current);
         const updatedData = sortAndFormatToEchartsData(data);
         const dataNums = updatedData.flatMap((d: any) => d[1]) as number[];
         const dataStrings = updatedData.flatMap((d: any) => d[0]) as string[];
         option.series[0].data = [...dataNums];
         //  option.xAxis = dataStrings;
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
export default DynamicData;

// function randomData(): DataItem {
//    now = new Date(+now + oneDay);
//    value = value + Math.random() * 21 - 10;
//    return {
//       name: now.toString(),
//       value: [
//          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
//          Math.round(value),
//       ],
//    };
// }

// let data: DataItem[] = [];
// let now = new Date(1997, 9, 3);
// let oneDay = 24 * 3600 * 1000;
// let value = Math.random() * 1000;
// for (var i = 0; i < 1000; i++) {
//    data.push(randomData());
// }

const option = {
   title: {
      text: "Dynamic Data & Time Axis",
   },
   tooltip: {
      trigger: "axis",
      formatter: function (params: any) {
         params = params[0];
         var date = new Date(params.name);
         return (
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " : " +
            params.value[1]
         );
      },
      axisPointer: {
         animation: false,
      },
   },
   xAxis: {
      type: "time",
      splitLine: {
         show: false,
      },
   },
   yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      splitLine: {
         show: false,
      },
   },
   series: [
      {
         name: "Fake Data",
         type: "line",
         showSymbol: false,
         data: [0],
      },
   ],
};

// setInterval(function () {
//    for (var i = 0; i < 5; i++) {
//       data.shift();
//       data.push(randomData());
//    }

//    myChart.setOption<echarts.EChartsOption>({
//       series: [
//          {
//             data: data,
//          },
//       ],
//    });
// }, 1000);
