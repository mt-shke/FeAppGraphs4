// @ts-nocheck

export interface OptionsParams {
   legend: string[];
   xAxis: string[];
   seriesData: {
      name: string;
      data: number[];
   }[][];
}

export const updateStackedAreaOptions = ({
   legend,
   seriesData,
   xAxis,
}: OptionsParams) => ({
   title: { text: "Stacked Area Chart" },
   tooltip: {
      trigger: "axis",
      axisPointer: { type: "cross", label: { backgroundColor: "#6a7985" } },
   },
   toolbox: { feature: { saveAsImage: {} } },
   grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
   yAxis: [{ type: "value" }],
   legend: { data: legend },
   xAxis: [{ type: "category", boundaryGap: false, data: xAxis }],
   series: seriesData.map((item) => ({
      name: item.name,
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: { focus: "series" },
      data: item.data,
   })),
});

// Exemple d'utilisation :

const legend = ["Email", "Union Ads", "Video Ads"];
const data = [
   [120, 132, 101, 134, 90, 230, 210],
   [220, 182, 191, 234, 290, 330, 310],
   [150, 232, 201, 154, 190, 330, 410],
];
const xAxis = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const seriesSample = {
   name: "Email",
   type: "line",
   stack: "Total",
   areaStyle: {},
   emphasis: {
      focus: "series",
   },
   data: [120, 132, 101, 134, 90, 230, 210],
};

export const stackedAreaOption = {
   title: {
      text: "Stacked Area Chart",
   },
   tooltip: {
      trigger: "axis",
      axisPointer: {
         type: "cross",
         label: {
            backgroundColor: "#6a7985",
         },
      },
   },
   legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
   },
   toolbox: {
      feature: {
         saveAsImage: {},
      },
   },
   grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
   },
   xAxis: [
      {
         type: "category",
         boundaryGap: false,
         data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
   ],
   yAxis: [
      {
         type: "value",
      },
   ],
   series: [
      {
         name: "Email",
         type: "line",
         stack: "Total",
         areaStyle: {},
         emphasis: {
            focus: "series",
         },
         data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
         name: "Union Ads",
         type: "line",
         stack: "Total",
         areaStyle: {},
         emphasis: {
            focus: "series",
         },
         data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
         name: "Video Ads",
         type: "line",
         stack: "Total",
         areaStyle: {},
         emphasis: {
            focus: "series",
         },
         data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
         name: "Direct",
         type: "line",
         stack: "Total",
         areaStyle: {},
         emphasis: {
            focus: "series",
         },
         data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
         name: "Search Engine",
         type: "line",
         stack: "Total",
         label: {
            show: true,
            position: "top",
         },
         areaStyle: {},
         emphasis: {
            focus: "series",
         },
         data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
   ],
};
