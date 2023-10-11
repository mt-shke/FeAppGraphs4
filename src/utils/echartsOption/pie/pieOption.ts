// export const pieOption = {
//    title: {
//       text: "Referer of a Website",
//       subtext: "Fake Data",
//       left: "center",
//    },
//    tooltip: {
//       trigger: "item",
//    },
//    legend: {
//       orient: "vertical",
//       left: "left",
//    },
//    series: [
//       {
//          name: "Access From",
//          type: "pie",
//          radius: "50%",
//          data: [
//             { value: 1048, name: "Search Engine" },
//             { value: 735, name: "Direct" },
//             { value: 580, name: "Email" },
//             { value: 484, name: "Union Ads" },
//             { value: 300, name: "Video Ads" },
//          ],
//          emphasis: {
//             itemStyle: {
//                shadowBlur: 10,
//                shadowOffsetX: 0,
//                shadowColor: "rgba(0, 0, 0, 0.5)",
//             },
//          },
//       },
//    ],
// };

export const pieOption = {
   title: {
      // TODO
      text: "Buy transactions",
      // subtext: "A contemplative analyse of all the bought products",
      left: "center",
   },
   tooltip: {
      trigger: "item",
   },
   legend: {
      orient: "vertical",
      left: "left",
   },
   series: [
      {
         name: "Access From",
         type: "pie",
         radius: "70%",
         data: [],
         emphasis: {
            itemStyle: {
               shadowBlur: 10,
               shadowOffsetX: 0,
               shadowColor: "rgba(0, 0, 0, 0.5)",
            },
         },
      },
   ],
};

export type pieOptionType = {
   title: {
      text: string;
      subtext?: string;
      left: string;
   };
   tooltip: {
      trigger: string;
   };
   legend: {
      orient: string;
      left: string;
   };
   series: {
      name: string;
      type: string;
      radius: string;
      data: { value: number; name: string }[];
      emphasis?: {
         itemStyle: {
            shadowBlur: number;
            shadowOffsetX: number;
            shadowOffsetY?: number;
            shadowColor: string;
         };
      };
   }[];
};
