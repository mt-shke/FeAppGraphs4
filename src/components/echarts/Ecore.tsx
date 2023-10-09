// import React from "react";
// import ReactEChartsCore from "echarts-for-react/lib/core";
// import echarts from "echarts/lib/echarts"; // Importez la bibliothèque ECharts de base
// import "echarts/lib/chart/bar"; // Importez le type de graphique "bar" d'ECharts
// import "echarts/lib/component/tooltip"; // Importez le composant "tooltip" d'ECharts

// // Données de l'exemple
// const data = {
//    categories: ["Janvier", "Février", "Mars", "Avril", "Mai"],
//    series: [
//       {
//          name: "Ventes",
//          data: [120, 200, 150, 80, 300],
//       },
//    ],
// };

// // Configuration du graphique
// const options = {
//    xAxis: {
//       type: "category",
//       data: data.categories,
//    },
//    yAxis: {
//       type: "value",
//    },
//    series: [
//       {
//          name: "Ventes",
//          type: "bar",
//          data: data.series[0].data,
//       },
//    ],
// };

// function Ecore() {
//    return (
//       <div>
//          <h2>Graphique à barres</h2>
//          <ReactEChartsCore
//             echarts={echarts}
//             option={options}
//             notMerge={true}
//             lazyUpdate={true}
//             style={{ height: "400px", width: "100%" }}
//          />
//       </div>
//    );
// }

// export default Ecore;
