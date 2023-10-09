// import ReactEcharts from "echarts-for-react";
// import { sortEchartsData } from "../../../utils/dates";

// interface IEcharts {
//    data?: any;
// }

// const PieChart: React.FC<IEcharts> = ({ data }) => {
//    const sortedData = sortEchartsData(data);
//    const symbols = new Set(sortedData.map((d) => d[3]));
//    let symAmount: any[] = [];
//    symbols.forEach((sym) => {
//       const filtered = sortedData.filter((sdata, index) => sdata[3] === sym);
//       const symFiltered = filtered.map((sF) => sF[1]);
//       const sum = symFiltered.reduce((acc, curr) => acc + curr, 0);
//       symAmount.push([symFiltered.length, sum, sym]);
//    });

//    symAmount = [["Transaction number", "Total amount", "Symbol"], ...symAmount];
//    const updatedSource = symAmount;

//    const option = {
//       title: {
//          text: "Total amount of transactions per organization",
//       },
//       dataset: {
//          source: updatedSource,
//       },
//       grid: { containLabel: true },
//       xAxis: { name: "Amount" },
//       yAxis: { type: "category" },
//       visualMap: {
//          orient: "horizontal",
//          left: "center",
//          min: 1,
//          max: 20,
//          text: ["20+", "1"],
//          // Map the score column to color
//          dimension: 0,
//          inRange: {
//             color: ["#65B581", "#FFCE34", "#FD665F"],
//          },
//       },
//       series: [
//          {
//             type: "bar",
//             encode: {
//                // Map the "amount" column to X axis.
//                x: "Total amount",
//                // Map the "product" column to Y axis
//                y: "Symbol",
//             },
//          },
//       ],
//    };

//    return (
//       <ReactEcharts
//          option={option}
//          style={{ height: "500px", width: "100%" }}
//       />
//    );
// };
// export default PieChart;

import ReactECharts from "echarts-for-react";

interface IChartData {
   data: any;
}

const PieChart: React.FC<IChartData> = ({ data }) => {
   const options = {
      title: {
         text: "Pie Chart",
         left: "center",
      },
      tooltip: {
         trigger: "item",
         formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      series: [
         {
            name: "Category",
            type: "pie",
            radius: "50%",
            data: data,
            emphasis: {
               itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
               },
            },
            label: {
               show: true,
               formatter: "{b}: {c} ({d}%)",
            },
            labelLine: {
               show: true,
            },
         },
      ],
   };

   return <ReactECharts option={options} />;
};

export default PieChart;
