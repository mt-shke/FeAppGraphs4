export interface ICustomChartData {
   title: string;
   xName: string;
   yName: string;
   xData: string[] | number[] | [] | any;
   yData: string[] | number[] | [] | any;
   productName?: string;
   productData?: string[] | number[] | [] | any;
   type: string;
   color?: string;
}

export const chartColors = {
   blue: "#5470c6",
   green: "#91cc75",
   yellow: "#fac858",
   red: "#ee6666",
   skyblue: "#73c0de",
   darkgreen: "#3ba272",
   orange: "#fc8452",
   purple: "#9a60b4",
   lightpurple: "#ea7ccc",
};

export const setOption = (chartData: ICustomChartData) => {
   return {
      title: {
         text: chartData.title,
         // subtext: "Fake Data",
         // left: "center",
      },
      xAxis: {
         name: chartData.xName,
         type: "category",
         data: chartData.xData,
         // boundaryGap: [0, "50%"],
      },
      yAxis: {
         name: chartData.yName,
         type: "value",
      },
      grid: {
         left: "2%",
         right: "2%",
         bottom: "2%",
         containLabel: true,
      },
      series: [
         {
            data: chartData.yData,
            type: chartData.type,
            showBackground: false,
            color: chartData.color ?? chartColors.blue,
            // backgroundStyle: {
            //    color: "rgba(180, 180, 180, 0.2)",
            // },
            emphasis: {
               itemStyle: {
                  shadowBlur: 4,
                  shadowOffsetX: 1,
                  shadowColor: "rgba(0, 0, 0, 0.7)",
               },
            },
         },
      ],
      tooltip: {
         trigger: "item",
      },
      // legend: {
      //    left: 10,
      //    bottom: 10,
      // },
   };

   // return {
   //    xAxis: {
   //       type: "category",
   //       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
   //    },
   //    yAxis: {
   //       type: "value",
   //    },
   //    series: [
   //       {
   //          data: [120, 200, 150, 80, 70, 110, 130],
   //          type: "bar",
   //          showBackground: false,
   //          // backgroundStyle: {
   //          //    color: "rgba(180, 180, 180, 0.2)",
   //          // },
   //       },
   //    ],
   // };
};

export const setVisualOption = (chartData: ICustomChartData) => {
   return {
      title: {
         text: chartData.title,
      },
      dataset: {
         source: [
            [chartData.xName, chartData.yName],
            [...chartData.xData],
            [...chartData.yData],
         ],
      },
      grid: { containLabel: true },
      xAxis: { name: "Amount" },
      yAxis: { type: "category" },
      // visualMap: {
      //    orient: "horizontal",
      //    left: "center",
      //    min: 1,
      //    max: 20,
      //    text: ["20+", "1"],
      //    // Map the score column to color
      //    dimension: 0,
      //    inRange: {
      //       color: ["#65B581", "#FFCE34", "#FD665F"],
      //    },
      // },
      series: [
         {
            type: chartData.type,
            encode: {
               // Map the "amount" column to X axis.
               x: "Total amount",
               // Map the "product" column to Y axis
               y: "Symbol",
            },
         },
      ],
   };
};
