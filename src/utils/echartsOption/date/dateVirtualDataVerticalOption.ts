export const dateVirtualVerticalOption = {
   tooltip: {
      position: "top",
   },
   visualMap: {
      min: 0,
      max: 1000,
      calculable: true,
      orient: "vertical",
      left: "670",
      top: "center",
   },
   calendar: [
      {
         orient: "vertical",
         range: "2015",
      },
      {
         left: 300,
         orient: "vertical",
         range: "2016",
      },
      {
         left: 520,
         cellSize: [20, "auto"],
         bottom: 10,
         orient: "vertical",
         range: "2017",
         dayLabel: {
            margin: 5,
         },
      },
   ],
   series: [
      {
         type: "heatmap",
         coordinateSystem: "calendar",
         calendarIndex: 0,
         data: [],
      },
      {
         type: "heatmap",
         coordinateSystem: "calendar",
         calendarIndex: 1,
         data: [],
      },
      {
         type: "heatmap",
         coordinateSystem: "calendar",
         calendarIndex: 2,
         data: [],
      },
   ],
};
