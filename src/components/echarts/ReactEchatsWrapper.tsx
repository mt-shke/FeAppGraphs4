// import ReactEcharts from "echarts-for-react";
// import { dateToFrFormat } from "../../utils/dates";

// interface IEcharts {
//    data?: any;
// }

// const ReactEchartsWrapper: React.FC<IEcharts> = ({ data }) => {
//    const updatedDataset = data.map((d) => ({
//       date: dateToFrFormat(d[0]),
//       value: d[2] === "buy" ? -Number(d[1]) : d[1],
//    }));

//    const dataSet = {
//       dimensions: ["date", "value"],
//       source: updatedDataset,
//    };

//    let option = {
//       dataset: dataSet,
//       xAxis: { type: "value" },
//       yAxis: {
//          type: "category",
//          data: dataSet.source.map((item) => item.date),
//       },
//       series: [
//          {
//             type: "bar",
//             encode: {
//                x: "value",
//                y: "name",
//             },
//             label: {
//                show: true,
//                position: "right",
//                formatter: "{b}: {c}",
//             },
//          },
//       ],
//    };

//    return (
//       <ReactEcharts
//          option={option}
//          style={{
//             height:
//                updatedDataset.length <= 20
//                   ? "400px"
//                   : `${updatedDataset.length * 2}0px`,
//          }}
//       />
//    );
// };
// export default ReactEchartsWrapper;

// // create a custom dataset
// const myDataset = {
//    dimensions: ["name", "value"],
//    source: [
//       { name: "A", value: -10 },
//       { name: "B", value: 20 },
//       { name: "C", value: -30 },
//       { name: "D", value: 40 },
//       { name: "E", value: -50 },
//       { name: "F", value: 60 },
//    ],
// };
