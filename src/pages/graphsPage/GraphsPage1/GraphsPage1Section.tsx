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

export interface ICtxProps {
   ctx: ICustomerState;
}

const GraphsPage1Section: React.FC<ICtxProps> = ({ ctx }) => {
   const sortedTransactions = getTransactions(ctx);

   if (!ctx.account || !sortedTransactions) {
      return (
         <div className="flex flex-1 md:row-start-2 md:row-end-4 md:py-1">
            <section className="flex flex-1 flex-col md:py-0 md:px-2 md:bg-main-grey4 rounded">
               <div className="min-h-screen flex py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
                  <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:py-2 md:min-h-max md:h-full md:flex-row bg-main-grey4 rounded">
                     <Container customStyle="flex flex-1 md:flex-auto md:w-1/3 bg-main-grey"></Container>
                     <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
                     <Container customStyle="flex flex-1 md:flex-auto md:w-2/3 bg-main-grey2"></Container>
                  </div>
               </div>
               <hr className="hidden md:block h-[1px] w-full border border-b-[1px] border-b-main-grey" />
               <div className="min-h-screen flex flex-1 py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
                  <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:py-2 md:min-h-max md:h-full md:flex-row bg-main-grey4 rounded">
                     <Container customStyle="flex flex-1 bg-main-grey2"></Container>
                     <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
                     <Container customStyle="flex flex-1 bg-main-grey3"></Container>
                  </div>
               </div>
            </section>
         </div>
      );
   }

   let buyData: ICustomChartData | null = null;
   let sellData: ICustomChartData | null = null;
   let allData: ICustomChartData | null = null;
   let totalData: any;

   const { buy, sell, byDates } = sortedTransactions;
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

   return (
      <div className="flex flex-1 md:row-start-2 md:row-end-4 md:py-1">
         <section className="flex flex-1 flex-col md:py-0 md:px-2 md:bg-main-grey4 rounded">
            <div className="min-h-screen flex py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
               <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:py-2 md:min-h-max md:h-full md:flex-row bg-main-grey4 rounded">
                  <Container customStyle="flex flex-1 md:flex-auto md:w-1/3 bg-main-grey">
                     <ChartModel chartData={totalData} />
                  </Container>
                  <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
                  <Container customStyle="flex flex-1 md:flex-auto md:w-2/3 bg-main-grey2">
                     <ChartModel chartData={allData} />
                  </Container>
               </div>
            </div>
            <hr className="hidden md:block h-[1px] w-full border border-b-[1px] border-b-main-grey" />
            <div className="min-h-screen flex flex-1 py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
               <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:py-2 md:min-h-max md:h-full md:flex-row bg-main-grey4 rounded">
                  <Container customStyle="flex flex-1 bg-main-grey2">
                     <ChartModel chartData={buyData} />
                  </Container>
                  <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
                  <Container customStyle="flex flex-1 bg-main-grey3">
                     <ChartModel chartData={sellData} />
                  </Container>
               </div>
            </div>
         </section>
      </div>
   );
};
export default GraphsPage1Section;
