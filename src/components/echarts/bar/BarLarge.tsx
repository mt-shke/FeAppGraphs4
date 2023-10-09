// @ts-nocheck

import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { sortAndFormatDates } from "../../../utils/dates";

interface IEchartsLineSimpleCustom {
   //    data?: Array<[string, number]>;
   data?: any;
}

const dataCount = 5e5;
// const countedData = generateData(dataCount);

const BarLarge: React.FC<IEchartsLineSimpleCustom> = ({ data }) => {
   const chartRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (!!chartRef.current) {
         const myChart = echarts.init(chartRef.current);
         const updatedData = sortAndFormatDates(data);
         const dataNums = updatedData.flatMap((d) => d[1]) as number[];
         const dataStrings = updatedData.flatMap((d) => d[0]) as string[];
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
export default BarLarge;

const option = {
   title: {
      text: "Bar Large",
      left: 30,
      textStyle: {
         color: "#016919",
         fontWeight: "bolder",
      },
   },
   toolbox: {
      feature: {
         dataZoom: {
            yAxisIndex: false,
         },
         saveAsImage: {
            pixelRatio: 2,
         },
      },
   },
   tooltip: {
      trigger: "axis",
      axisPointer: {
         type: "shadow",
      },
   },
   grid: {
      bottom: 90,
   },
   dataZoom: [
      {
         type: "inside",
      },
      {
         type: "slider",
      },
   ],
   xAxis: {
      data: ["str", "ing"],
      //   data: data.categoryData,
      silent: false,
      splitLine: {
         show: false,
      },
      splitArea: {
         show: false,
      },
   },
   yAxis: {
      splitArea: {
         show: false,
      },
   },
   series: [
      {
         type: "bar",
         data: [1, 2, 3],
         //  data: data.valueData,
         // Set `large` for large data amount
         large: true,
      },
   ],
};

// function generateData(count: number) {
//    let baseValue = Math.random() * 1000;
//    let time = +new Date(2011, 0, 1);
//    let smallBaseValue: number;

//    function next(idx: number) {
//       smallBaseValue =
//          idx % 30 === 0
//             ? Math.random() * 700
//             : smallBaseValue + Math.random() * 500 - 250;
//       baseValue += Math.random() * 20 - 10;
//       return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
//    }

//    const categoryData = [];
//    const valueData = [];

//    for (let i = 0; i < count; i++) {
//       categoryData.push(
//          echarts.format.formatTime("yyyy-MM-dd\nhh:mm:ss", time, false)
//       );
//       valueData.push(next(i).toFixed(2));
//       time += 1000;
//    }

//    return {
//       categoryData: categoryData,
//       valueData: valueData,
//    };
// }
