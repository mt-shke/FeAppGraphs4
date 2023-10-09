export const simpleCalendarTwoOption = {
   title: {
      top: 30,
      left: "center",
      text: "Daily Step Count",
   },
   tooltip: {},
   visualMap: {
      min: 0,
      max: 10000,
      type: "piecewise",
      orient: "horizontal",
      left: "center",
      top: 65,
   },
   calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ["auto", 13],
      range: "2016",
      itemStyle: {
         borderWidth: 0.5,
      },
      yearLabel: { show: false },
   },
   series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: getVirtualData("2016"),
   },
};
