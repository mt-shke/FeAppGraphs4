// @ts-nocheck

import ChartModel from "../../../../components/echarts/ChartModel";
import { TransactionType } from "../../../../models/ts/types";
import { updateStackedAreaOptions } from "../../../../utils/echartsOption/line/stackedAreaOption";
import {
   getTransactionCompaniesAmountData,
   getTransactions,
   getTransactionsCompaniesYearsData,
} from "../../../../utils/transaction";
import { ICtxProps } from "../../GraphsPage1/GraphsPage1Section";

// Component and Data manipulation for the
// CalendarTwoOption
const GraphsPage2StackedArea: React.FC<ICtxProps> = ({ ctx }) => {
   const sortedTransactions = getTransactions(ctx);
   if (!ctx.account || !sortedTransactions) {
      return <></>;
   }
   const { byDates } = sortedTransactions;
   const windowStyle = {};
   // TODO
   const updatedOptions = getTransactionsStackedAreaOptions(byDates);
   return <ChartModel customOption={updatedOptions} style={windowStyle} />;
};

export default GraphsPage2StackedArea;

const getTransactionsStackedAreaOptions = (array: TransactionType[]) => {
   const companiesYears = getTransactionsCompaniesYearsData(array);
   const companiesAmount = getTransactionCompaniesAmountData(array);
   const syms = Object.values(companiesAmount).map((c) => c.sym);
   let seriesData = [];
   syms.forEach((sym) => {
      const symAmounts = Object.values(companiesYears)
         .map((arr) => arr.filter((a) => a.symbol === sym))
         .flat()
         .map((c) => c.amount);
      const tempAmount = [...symAmounts];
      const reduced = symAmounts.reduce((prev, curr, ind) => {
         if (ind === 0) {
            return prev + curr;
         }
         const sum = tempAmount[ind - 1] + curr;
         tempAmount[ind] = sum;
         return sum;
      }, 0);

      seriesData = [
         ...seriesData,
         {
            name: sym,
            data: [...tempAmount],
         },
      ];
   });
   const legend = syms;
   const xAxis = Object.keys(companiesYears).flat();
   return updateStackedAreaOptions({
      legend,
      seriesData,
      xAxis,
   });
};
