// @ts-ignore

import ChartModel from "../../../../components/echarts/ChartModel";
import { dateToEnFormat } from "../../../../utils/dates";
import { dateVirtualDataHorizontalTwoOption } from "../../../../utils/echartsOption/date/dateVirtualDataHorizontalTwoOption";
import {
   getTransactions,
   getTransactionsDate,
} from "../../../../utils/transaction";
import { ICtxProps } from "../../GraphsPage1/GraphsPage1Section";

// Component and Data manipulation for the
// CalendarTwoOption
const GraphsPage2CalendarTwo: React.FC<ICtxProps> = ({ ctx }) => {
   const sortedTransactions = getTransactions(ctx);
   if (!ctx.account || !sortedTransactions) {
      return <></>;
   }
   const { byDates } = sortedTransactions;
   let calendarTwoOption = dateVirtualDataHorizontalTwoOption;
   let data: any = [];
   // TODO
   let windowStyle = {};

   const updatedData = byDates.map((trans) => [
      dateToEnFormat(trans.date),
      trans.transaction_code === "sell" ? trans.amount : -trans.amount,
   ]);
   // Filter date for calendar
   const filteredDates = getTransactionsDate(byDates);
   const filteredYears = new Set(filteredDates.map((date) => date.slice(0, 4)));
   const updatedCalendar = [...filteredYears].map((year, index) => ({
      top: index === 0 ? 60 : Number(index + "60"),
      range: year,
      cellSize: ["auto", 10],
      right: 10,
   }));
   // Set expected window height
   windowStyle = {
      minHeight: [...filteredYears].length * 100 + 500,
   };

   // Update series data according to calendar and Year
   let row = 0;
   filteredYears.forEach((year) => {
      const sameYear = updatedData.filter((trans) =>
         String(trans[0]).startsWith(year)
      );
      const updatedYearData = {
         type: "heatmap",
         coordinateSystem: "calendar",
         calendarIndex: row,
         data: sameYear,
      };
      data.push(updatedYearData);
      row += 1;
   });
   calendarTwoOption = {
      ...calendarTwoOption,
      calendar: updatedCalendar,
      series: data,
      title: { text: "Transactions / Amount / Calendar" },
   };

   return <ChartModel customOption={calendarTwoOption} style={windowStyle} />;
};

export default GraphsPage2CalendarTwo;
