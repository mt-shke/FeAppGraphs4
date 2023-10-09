// @ts-nocheck

function createScatterChartConfig(
   xAxisScale,
   yAxisScale,
   effectScatterData,
   scatterData
) {
   const chartConfig = {
      xAxis: {
         scale: xAxisScale,
      },
      yAxis: {
         scale: yAxisScale,
      },
      series: [
         {
            type: "effectScatter",
            symbolSize: 20,
            data: effectScatterData,
         },
         {
            type: "scatter",
            data: scatterData,
         },
      ],
   };

   return chartConfig;
}

// Exemple d'utilisation de la fonction :
const myChart = echarts.init(document.getElementById("yourChartId")); // Remplacez 'yourChartId' par l'ID de votre conteneur de graphique

const xAxisScale = true;
const yAxisScale = true;
const effectScatterData = [
   [172.7, 105.2],
   [153.4, 42],
];
const scatterData = [
   // Inclure les données pour votre scatter ici
];

const chartConfig = createScatterChartConfig(
   xAxisScale,
   yAxisScale,
   effectScatterData,
   scatterData
);

myChart.setOption(chartConfig);
