// @ts-nocheck

import ChartModel from "../../../../components/echarts/ChartModel";
import { TransactionType } from "../../../../models/ts/types";
import { dateToEnFullFormat, getWeekDay } from "../../../../utils/dates";
import {
   customDatePunchHours,
   datePunchCardOption,
} from "../../../../utils/echartsOption/date/datePunchCardOption";
import { getTransactions } from "../../../../utils/transaction";
import { ICtxProps } from "../../GraphsPage1/GraphsPage1Section";

// DatePunchOption
// Return a graph with:
// - for each week day
// - the daily hour of transactions
// - and the total number of transactions that happened in this (weekDay, dailyHour) window
const GraphsPage2DatePunch: React.FC<ICtxProps> = ({ ctx }) => {
   let punchOption = datePunchCardOption;
   const sortedTransactions = getTransactions(ctx);
   if (!ctx.account || !sortedTransactions) {
      return <></>;
   }

   const { byDates } = sortedTransactions;

   const datePunchData = getDatePunchData(byDates);
   const punchSeriesData = [
      {
         name: "Punch Card",
         type: "heatmap",
         data: datePunchData,
         label: { show: true },
         emphasis: {
            itemStyle: {
               shadowBlur: 10,
               shadowColor: "rgba(0, 0, 0, 0.5)",
            },
         },
      },
   ];
   const updatedOption = {
      ...punchOption,
      series: punchSeriesData,
      title: {
         text: "Weekly transactions occurence",
      },
   };

   return <ChartModel customOption={updatedOption} />;
};

export default GraphsPage2DatePunch;

const getDatePunchData = (array: TransactionType[]) => {
   let tempData: any = {};
   const datePunchData = array.map((trans) => [
      dateToEnFullFormat(trans.date).split(" ")[1].split(":")[0],
      getWeekDay(trans.date),
      1,
   ]);

   // For each daily hour, set an object with its hour as key
   // and as value: an array with the expected data (transactions occurence)
   customDatePunchHours.forEach((hour) => {
      tempData[hour] = [];
      datePunchData.forEach((date) => {
         if (String(date).startsWith(hour)) {
            tempData[hour] = [...tempData[hour], date];
         }
      });
   });
   // Filter each daily hour without any transaction
   const filtered = Object.values(tempData).filter((tem) => tem.length > 0);
   tempData = filtered;
   const finalData: any = [];
   // For each hour with at least one transaction, count the total number of transactions
   tempData.forEach((tem) => {
      const reduced = reduceDaysArray(tem);
      finalData.push(reduced);
   });
   // Flat, filter hour with 0 transaction
   return [...finalData].flat().filter((arr) => arr.length >= 1);
};

// Filter and join each daily hour transactions
// Count the total transactions per daily hour
// And return an array as [weekDay, numberOfTransactions, daily hour]
const reduceDaysArray = (arr: any) => {
   const numberOfWeekDay = [0, 1, 2, 3, 4, 5, 6];
   const sortedByNumberOfTransactions = arr.sort((a, b) => a[1] - b[1]);
   const reduceds = numberOfWeekDay.map((num) => {
      const reduce = sortedByNumberOfTransactions
         // @ts-nocheck TODO
         .filter((tem) => tem[1] === num)
         .reduce(
            // @ts-nocheck TODO
            (prev, curr) => [
               curr[0],
               curr[1],
               prev[2] ? prev[2] + curr[2] : 0 + curr[2],
            ],
            0
         );
      return reduce || [];
   });
   return reduceds;
};
