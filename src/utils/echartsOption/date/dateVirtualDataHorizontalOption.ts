import dayjs from "dayjs";

export const getVirtualDate = (year = 2020) => {
   const random = Math.floor(Math.random() * 1009999999000);
   const formarted = dayjs(random).format("DD/MM/YYYY").slice(0, 6);
   return formarted + year;
};

export function getVirtualData(year = 2017) {
   const random = Math.floor(Math.random() * 1009999999000);
   const formarted = dayjs(random).format("DD/MM/YYYY");
   const updatedDate = formarted.slice(0, 6);

   // const date = +echarts.time.parse(year + "-01-01");
   // const end = +echarts.time.parse(+year + 1 + "-01-01");
   // const dayTime = 3600 * 24 * 1000;
   // const data = [];

   // for (let time = date; time < end; time += dayTime) {
   //    data.push([
   //       echarts.time.format(time, "{yyyy}-{MM}-{dd}", false),
   //       Math.floor(Math.random() * 1000),
   //    ]);
   // }
}

export const getData = () => {
   return new Array(30).fill(true).map((d) => getVirtualDate());
};

export const dateVirtualDataHorizontalOption = {
   title: {
      text: "Calendar",
   },
   tooltip: {
      position: "top",
   },
   visualMap: {
      min: 0,
      max: 1000,
      calculable: true,
      orient: "horizontal",
      left: "center",
      top: "top",
   },
   calendar: [
      {
         top: 100,
         range: "2020",
         cellSize: ["auto", 6],
      },
      // {
      //    top: 260,
      //    range: "2016",
      //    cellSize: ["auto", 20],
      // },
      // {
      //    top: 450,
      //    range: "2015",
      //    cellSize: ["auto", 20],
      //    right: 5,
      // },
   ],
   series: [
      {
         type: "heatmap",
         coordinateSystem: "calendar",
         calendarIndex: 0,
         data: getData(),
      },
      // {
      //    type: "heatmap",
      //    coordinateSystem: "calendar",
      //    calendarIndex: 1,
      //    data: [getVirtualDate(), getVirtualDate()],
      // },
      // {
      //    type: "heatmap",
      //    coordinateSystem: "calendar",
      //    calendarIndex: 2,
      //    data: [getVirtualDate(), getVirtualDate()],
      // },
   ],
};
