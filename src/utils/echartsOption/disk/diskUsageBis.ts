// @ts-nocheck

function createTreemapConfig(titleText, subtext, leafDepth, data) {
   const treemapOption = {
      title: {
         text: titleText,
         subtext: subtext,
         left: "leafDepth",
      },
      tooltip: {},
      series: [
         {
            name: "option",
            type: "treemap",
            visibleMin: 300,
            data: data.children,
            leafDepth: leafDepth,
            levels: [
               {
                  itemStyle: {
                     borderColor: "#555",
                     borderWidth: 4,
                     gapWidth: 4,
                  },
               },
               {
                  colorSaturation: [0.3, 0.6],
                  itemStyle: {
                     borderColorSaturation: 0.7,
                     gapWidth: 2,
                     borderWidth: 2,
                  },
               },
               {
                  colorSaturation: [0.3, 0.5],
                  itemStyle: {
                     borderColorSaturation: 0.6,
                     gapWidth: 1,
                  },
               },
               {
                  colorSaturation: [0.3, 0.5],
               },
            ],
         },
      ],
   };

   return treemapOption;
}

// Exemple d'utilisation de la fonction :
const titleText = "ECharts Options";
const subtext = "2016/04";
const leafDepth = 2;
const data = {
   children: [
      // Inclure les données pour votre treemap ici
   ],
};

const treemapConfig = createTreemapConfig(titleText, subtext, leafDepth, data);
// Utilisez treemapConfig pour configurer votre treemap ECharts
