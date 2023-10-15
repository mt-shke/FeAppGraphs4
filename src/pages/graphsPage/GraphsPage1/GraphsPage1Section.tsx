import Container from "../../../components/ui/container/Container";
import { ICustomerState } from "../../../state/CustomerContext";
import {
   getTransactions,
   getTransactionsAmount,
   getTransactionsDate,
   getTransactionsTotalAmount,
} from "../../../utils/transaction";
import ChartModel from "../../../components/echarts/ChartModel";
import { ICustomChartData, chartColors } from "../../../utils/echarts";
import { AllTransactionsType } from "../../../models/ts/types";
import { authAxios } from "../../../api";
import { useEffect } from "react";

export interface ICtxProps {
   ctx: ICustomerState;
}

const GraphsPage1Section: React.FC<ICtxProps> = ({ ctx }) => {
   let chartTotal,
      chartAll,
      chartBuy,
      chartSell = <></>;
   if (ctx.account && ctx.customer) {
      const sortedTransactions = getTransactions(ctx);
      const expectedSectionData = getSectionData(sortedTransactions);
      chartTotal = <ChartModel chartData={expectedSectionData.totalData} />;
      chartAll = <ChartModel chartData={expectedSectionData.allData} />;
      chartBuy = <ChartModel chartData={expectedSectionData.buyData} />;
      chartSell = <ChartModel chartData={expectedSectionData.sellData} />;
   }

   useEffect(() => {
      getAccountTransactions(ctx);
   }, [ctx.account]);

   const getAccountTransactions = async (ctx: ICustomerState) => {
      try {
         const customerAccounts = ctx.customer?.accounts;
         if (!customerAccounts) {
            return [];
         }
         // Single request
         // const response = await authAxios.get(
         //    "/transactions/" + customerAccounts[0]
         // )
         const promises = customerAccounts.map((elem) =>
            authAxios.get("/transactions/" + elem)
         );
         const responses = await Promise.all(promises);
         if (!responses) {
            throw new Error("No Resp");
         }
         // Destruct responses to final transactions array
         const foundTransactions = responses.map(
            (elem) => elem.data.transactions
         );
         console.log("fetchedTransactions :", foundTransactions);

         return foundTransactions;
      } catch (error) {
         console.log("Error :", error);
      }
   };

   return (
      <div className="flex flex-1 md:row-start-2 md:row-end-4 md:py-1">
         <section className="flex flex-1 flex-col md:py-0 md:px-2 md:bg-main-grey4 rounded">
            <div className="min-h-screen flex py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
               <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:py-2 md:min-h-max md:h-full md:flex-row bg-main-grey4 rounded">
                  <Container customStyle="flex flex-1 md:flex-auto md:w-1/3 bg-main-grey">
                     {chartTotal}
                  </Container>
                  <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
                  <Container customStyle="flex flex-1 md:flex-auto md:w-2/3 bg-main-grey2">
                     {chartAll}
                  </Container>
               </div>
            </div>
            <hr className="hidden md:block h-[1px] w-full border border-b-[1px] border-b-main-grey" />
            <div className="min-h-screen flex flex-1 py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
               <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:py-2 md:min-h-max md:h-full md:flex-row bg-main-grey4 rounded">
                  <Container customStyle="flex flex-1 bg-main-grey2">
                     {chartBuy}
                  </Container>
                  <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
                  <Container customStyle="flex flex-1 bg-main-grey3">
                     {chartSell}
                  </Container>
               </div>
            </div>
         </section>
      </div>
   );
};
export default GraphsPage1Section;

const getSectionData = (sortedTransactions: AllTransactionsType) => {
   const { buy, sell, byDates } = sortedTransactions;
   let buyData,
      sellData,
      allData: ICustomChartData | null = null;
   let totalData: any;
   const totalBuy = getTransactionsTotalAmount(buy);
   const totalSell = getTransactionsTotalAmount(sell);

   let totalTimelapse: number[] = [];
   const amountTimelapse = byDates.reduce((prev, curr) => {
      if (curr.transaction_code === "buy") {
         const total = prev - curr.amount;
         totalTimelapse.push(total);
         return total;
      } else {
         const total = prev + curr.amount;
         totalTimelapse.push(total);
         return total;
      }
   }, 0);

   const numOfBuy = buy.length || 0;
   const numOfSell = sell.length || 0;

   buyData = {
      title: "Buy",
      yName: "Amount",
      xName: "Date",
      yData: getTransactionsAmount(buy),
      xData: getTransactionsDate(buy),
      type: "bar",
      color: chartColors.orange,
   };
   sellData = {
      title: "Sell",
      yName: "Amount",
      xName: "Date",
      yData: getTransactionsAmount(sell),
      xData: getTransactionsDate(sell),
      type: "bar",
      color: chartColors.green,
   };

   allData = {
      title: "Balance Timelapse",
      yName: "Amount",
      xName: "Date",
      yData: totalTimelapse,
      xData: getTransactionsDate(byDates),
      type: "line",
   };

   totalData = {
      title: "Total Amount / Number of transactions",
      xName: "Transactions",
      yName: "Total Amount",
      yData: [
         {
            value: totalBuy,
            itemStyle: {
               color: chartColors.orange,
            },
         },
         {
            value: totalSell,
            itemStyle: {
               color: chartColors.green,
            },
         },
      ],
      xData: [numOfSell, numOfBuy],
      type: "bar",
   };

   return { totalData, buyData, sellData, allData };
};
