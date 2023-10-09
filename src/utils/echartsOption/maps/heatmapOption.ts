// @ts-nocheck

function createEChartsChartConfig(
   titleText,
   subtext,
   visualMapMin,
   visualMapMax,
   colorRange,
   seriesName,
   seriesType,
   mapName,
   seriesData
) {
   const chartConfig = {
      title: {
         text: titleText,
         subtext: subtext,
         left: "right",
      },
      tooltip: {
         trigger: "item",
         showDelay: 0,
         transitionDuration: 0.2,
      },
      visualMap: {
         left: "right",
         min: visualMapMin,
         max: visualMapMax,
         inRange: {
            color: colorRange,
         },
         text: ["High", "Low"],
         calculable: true,
      },
      toolbox: {
         show: true,
         left: "left",
         top: "top",
         feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
         },
      },
      series: [
         {
            name: seriesName,
            type: seriesType,
            roam: true,
            map: mapName,
            emphasis: {
               label: {
                  show: true,
               },
            },
            data: seriesData,
         },
      ],
   };

   return chartConfig;
}

// Exemple d'utilisation de la fonction :
const myChart = echarts.init(document.getElementById("yourChartId")); // Remplacez 'yourChartId' par l'ID de votre conteneur de graphique

const titleText = "USA Population Estimates (2012)";
const subtext = "Data from www.census.gov";
const visualMapMin = 500000;
const visualMapMax = 38000000;
const colorRange = [
   "#313695",
   "#4575b4",
   "#74add1",
   "#abd9e9",
   "#e0f3f8",
   "#ffffbf",
   "#fee090",
   "#fdae61",
   "#f46d43",
   "#d73027",
   "#a50026",
];
const seriesName = "USA PopEstimates";
const seriesType = "map";
const mapName = "USA";
const seriesData = [
   // Inclure les données pour votre carte ici
];

const chartConfig = createEChartsChartConfig(
   titleText,
   subtext,
   visualMapMin,
   visualMapMax,
   colorRange,
   seriesName,
   seriesType,
   mapName,
   seriesData
);

myChart.setOption(chartConfig);
