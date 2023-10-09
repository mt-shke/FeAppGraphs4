// @ts-nocheck

import Container from "../../../components/ui/container/Container";
import {
   getTransactionCompaniesAmountData,
   getTransactions,
} from "../../../utils/transaction";
import ChartModel from "../../../components/echarts/ChartModel";
import { ICtxProps } from "../GraphsPage1/GraphsPage1Section";

const GraphsPage3Section: React.FC<ICtxProps> = ({ ctx }) => {
   const sortedTransactions = getTransactions(ctx);
   if (!ctx.account || !sortedTransactions) {
      return (
         <div className="flex flex-1 md:row-start-2 md:row-end-4 md:py-1">
            <section className="flex flex-1 flex-col md:flex-row md:py-0 md:py-2 md:bg-main-grey4 rounded">
               <div className="min-h-screen flex py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
                  <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:px-2 md:min-h-0 md:h-full bg-main-grey4 rounded">
                     <Container customStyle="flex flex-1 bg-main-grey"></Container>
                     <hr className="hidden md:block h-[1px] w-full border border-b-[1px] border-b-main-grey" />
                     <Container customStyle="flex flex-1 bg-main-grey2"></Container>
                  </div>
               </div>
               <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
               <div className="min-h-[70vh] flex flex-1 py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
                  <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:px-2 md:min-h-0 md:h-full md:flex-row bg-main-grey4 rounded">
                     <Container customStyle="flex flex-1 bg-main-grey2"></Container>
                  </div>
               </div>
            </section>
         </div>
      );
   }

   let pieOption = {
      title: {
         text: "Buy analyse",
         subtext: "A contemplative analyse of all the bought products",
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

   const { buy } = sortedTransactions;
   const companiesBuyData = getTransactionCompaniesAmountData(buy);

   // TODO
   if (companiesBuyData.length > 0) {
      const pieUpdated = companiesBuyData.map((com: any) => ({
         value: com.totalAmount,
         name: com.sym,
      }));

      // TODO
      // @ts-expect-error
      pieOption.series[0].data = [...pieUpdated];
   }

   return (
      <div className="flex flex-1 md:row-start-2 md:row-end-4 md:py-1">
         <section className="flex flex-1 flex-col md:flex-row md:py-0 md:py-2 md:bg-main-grey4 rounded">
            <div className="min-h-screen flex py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
               <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:px-2 md:min-h-0 md:h-full bg-main-grey4 rounded">
                  <Container customStyle="flex flex-1 bg-main-grey"></Container>
                  <hr className="hidden md:block h-[1px] w-full border border-b-[1px] border-b-main-grey" />
                  <Container customStyle="flex flex-1 bg-main-grey2"></Container>
               </div>
            </div>
            <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
            <div className="min-h-[70vh] flex flex-1 py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
               <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:px-2 md:min-h-0 md:h-full md:flex-row bg-main-grey4 rounded">
                  <Container customStyle="flex flex-1 bg-main-grey2">
                     <ChartModel customOption={pieOption} />
                  </Container>
               </div>
            </div>
         </section>
      </div>
   );
};
export default GraphsPage3Section;

// const pieOption = {
//    title: {
//       text: "Buy analyse",
//       subtext: "A contemplative analyse of all the bought products",
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
