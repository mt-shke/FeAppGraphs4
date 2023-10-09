// function getVirtualData(year) {
//    const date = +echarts.time.parse(year + "-01-01");
//    const end = +echarts.time.parse(year + "-12-31");
//    const dayTime = 3600 * 24 * 1000;
//    const data = [];
//    for (let time = date; time <= end; time += dayTime) {
//       data.push([
//          echarts.time.format(time, "{yyyy}-{MM}-{dd}", false),
//          Math.floor(Math.random() * 10000),
//       ]);
//    }
//    return data;
// }

export const simpleCalendarOption = {
   visualMap: {
      show: false,
      min: 0,
      max: 100,
   },
   calendar: {
      range: ["2017", "2023"],
   },
   series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: [],
   },
};
