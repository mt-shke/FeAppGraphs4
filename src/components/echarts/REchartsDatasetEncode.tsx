// import ReactEcharts from "echarts-for-react";

// interface IEcharts {
//    data?: any;
// }

// // Example using dataset encode chart
// const REchartsDatasetEncode: React.FC<IEcharts> = ({ data }) => {
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
//          //    source: [
//          //     ["score", "amount", "product"],
//          //     [89.3, 58212, "Matcha Latte"],
//          //     [57.1, 78254, "Milk Tea"],
//          //     [74.4, 41032, "Cheese Cocoa"],
//          //     [50.1, 12755, "Cheese Brownie"],
//          //     [89.7, 20145, "Matcha Cocoa"],
//          //     [68.1, 79146, "Tea"],
//          //     [19.6, 91852, "Orange Juice"],
//          //     [10.6, 101852, "Lemon Juice"],
//          //     [32.7, 20112, "Walnut Brownie"],
//          //  ],
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
// export default REchartsDatasetEncode;
