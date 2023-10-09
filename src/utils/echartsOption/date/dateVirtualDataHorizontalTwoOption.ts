// @ts-nocheck

import { chartColors } from "../../echarts";

export const setDateVirtualDataHorizontalTwoOption = ({ calendar, data }) => {
   return {
      calendar: calendar,
      series: data,
      tooltip: {
         trigger: "item",
         // position: "top",
      },
      visualMap: {
         min: -12000,
         max: 12000,
         calculable: true,
         orient: "vertical",
         left: 0,
         top: 200,
         inRange: {
            color: [chartColors.red, chartColors.orange, chartColors.green],
         },
      },
      //  calendar: [
      //     {
      //        range: "2017",
      //        cellSize: ["auto", 10],
      //        right: 10,
      //     },
      //     {
      //        top: 160,
      //        range: "2016",
      //        cellSize: ["auto", 10],
      //        right: 10,
      //     },
      //     {
      //        top: 260,
      //        range: "2015",
      //        cellSize: ["auto", 10],
      //        right: 10,
      //     },
      //  ],
      //  series: [
      //     {
      //        type: "heatmap",
      //        coordinateSystem: "calendar",
      //        calendarIndex: 0,
      //        data: [
      //           ["2017-02-10", 700],
      //           ["2017-09-02", 700],
      //        ],
      //     },
      //     {
      //        type: "heatmap",
      //        coordinateSystem: "calendar",
      //        calendarIndex: 1,
      //        data: [["2016-07-03", 482]],
      //     },
      //     {
      //        type: "heatmap",
      //        coordinateSystem: "calendar",
      //        calendarIndex: 2,
      //        data: [["2015-02-10", 700]],
      //     },
      //  ],
   };
};

export const dateVirtualDataHorizontalTwoOption = {
   title: {
      text: "Calendar",
   },
   calendar: [
      {
         range: "2017",
         cellSize: ["auto", 10],
         right: 10,
      },
      {
         top: 160,
         range: "2016",
         cellSize: ["auto", 10],
         right: 10,
      },
      {
         top: 260,
         range: "2015",
         cellSize: ["auto", 10],
         right: 10,
      },
   ],
   series: [
      {
         type: "heatmap",
         coordinateSystem: "calendar",
         calendarIndex: 0,
         data: [
            ["2017-02-10", 700],
            ["2017-09-02", 700],
         ],
      },
      {
         type: "heatmap",
         coordinateSystem: "calendar",
         calendarIndex: 1,
         data: [["2016-07-03", 482]],
      },
      {
         type: "heatmap",
         coordinateSystem: "calendar",
         calendarIndex: 2,
         data: [["2015-02-10", 700]],
      },
   ],
   tooltip: {
      trigger: "item",
      // position: "top",
   },
   visualMap: {
      min: -12000,
      max: 12000,
      calculable: true,
      orient: "vertical",
      left: 0,
      top: 200,
      inRange: {
         color: [chartColors.orange, chartColors.blue],
      },
   },
};
