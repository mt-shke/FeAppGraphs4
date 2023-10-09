// @ts-nocheck

import { TransactionType } from "../../../models/ts/types";
import { getTransactionCompaniesAmountData } from "../../transaction";

export const basicRadarOption = {
   title: {
      text: "Basic Radar",
   },
   legend: {
      data: ["Buy", "Sell"],
      left: 10,
      bottom: 10,
   },
   radar: {
      indicator: [
         { name: "Sales", max: 6500 },
         { name: "Administration", max: 16000 },
         { name: "Information Technology", max: 30000 },
         { name: "Customer Support", max: 38000 },
         { name: "Development", max: 52000 },
         { name: "Marketing", max: 25000 },
      ],
   },
   series: [
      {
         name: "Buy vs Sell",
         type: "radar",
         data: [
            {
               value: [41500, 3000, 20000, 35000, 50000, 18000],
               name: "Allocated Budget",
            },
            {
               value: [5000, 14000, 28000, 26000, 42000, 21000],
               name: "Actual Spending",
            },
         ],
      },
   ],
   tooltip: {
      trigger: "item",
   },
};

export const getUpdatedRadarOption = (
   buy: TransactionType[],
   sell: TransactionType[]
) => {
   let buyAmount = getTransactionCompaniesAmountData(buy);
   let sellAmount = getTransactionCompaniesAmountData(sell);

   buyAmount.forEach((arr) => {
      const exist = sellAmount.find((sell) => sell.sym === arr.sym);
      if (!exist) {
         sellAmount = [...sellAmount, { sym: arr.sym, totalAmount: 0 }];
      }
   });
   sellAmount.forEach((arr) => {
      const exist = buyAmount.find((sell) => sell.sym === arr.sym);
      if (!exist) {
         buyAmount = [...buyAmount, { sym: arr.sym, totalAmount: 0 }];
      }
   });

   const sortAlpha = (array) =>
      array.sort((a, b) => a.sym.localeCompare(b.sym));
   const sortedBuy = sortAlpha(buyAmount);
   const sortedSell = sortAlpha(sellAmount);

   const allSyms = sortedBuy.map((s) => s.sym);
   const allMax = sortedBuy.map((buy, index) =>
      buy.totalAmount >= sortedSell[index].totalAmount
         ? buy.totalAmount
         : sortedSell[index].totalAmount
   );

   const indicatorData = allSyms.map((sym: string, ind: number) => ({
      name: sym,
      max: allMax[ind],
   }));

   const seriesData = [
      {
         name: "Buy",
         value: sortedBuy.map((item) => item.totalAmount),
      },
      {
         name: "Sell",
         value: sortedSell.map((item) => item.totalAmount),
      },
   ];

   return { indicatorData, seriesData };
};
