// @ts-nocheck
// ts-nocheck disables type checking for the entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import { fixStringNumber } from ".";
import { TransactionType, companies } from "../models/ts/types";
import { ICustomerState } from "../state/CustomerContext";
import { dateToEnFormat, dateToUnix } from "./dates";

export type AllTransactionsType = {
   buy: TransactionType[];
   sell: TransactionType[];
   byDates: TransactionType[];
};

// Return sorted transactions
export const sortTransactions = (
   transactions: Record<string, TransactionType>
): TransactionType[] => {
   const transactionsArray = Object.values(transactions);
   if (transactionsArray.length <= 0) {
      return [];
   }
   return transactionsArray.sort(
      (a, b) => dateToUnix(a.date) - dateToUnix(b.date)
   );
};

// Filter account/transactions bucket data and return sorted transactions
export const getAccountBucketTransactions = (
   ctx: ICustomerState
): TransactionType[] => {
   const transactionBucket = ctx.transactions.filter(
      (acc) => acc.account_id === ctx.account
   )[0];
   return transactionBucket.transactions;
};

export const getTransactions = (
   ctx: ICustomerState,
   transactionCode?: string
): AllTransactionsType => {
   if (ctx.account && ctx.transactions) {
      const firstBucketTransactions = getAccountBucketTransactions(ctx);
      const byDates = sortTransactions(
         firstBucketTransactions,
         transactionCode
      );
      const buy = byDates.filter((trans) => trans.transaction_code === "buy");
      const sell = byDates.filter((trans) => trans.transaction_code === "sell");
      return { buy, sell, byDates };
   }
};

export const getSingleCodeTransactions = (
   ctx: ICustomerState,
   transactionCode: "buy" | "sell"
): TransactionType[] => {
   if (ctx.account && ctx.transactions) {
      const firstBucketTransactions = getAccountBucketTransactions(ctx);
      return sortTransactions(firstBucketTransactions, transactionCode).filter(
         (trans) => trans.transaction_code === transactionCode
      );
   }
};

// // // // // // // // // // // // // //
// ALL TRANSACTION DATA FUNCTIONS //
export const getTransactionsCode = (transaction: TransactionType[]) =>
   transaction.map((trans) => trans.transaction_code)[0]?.toString() ?? "";
export const getTransactionsPrice = (transaction: TransactionType[]) =>
   transaction.map((trans) => fixStringNumber(trans.price));
export const getTransactionsDate = (transaction: TransactionType[]) =>
   transaction.map((trans) => dateToEnFormat(trans.date));
export const getTransactionsTotal = (transaction: TransactionType[]) =>
   transaction.map((trans) => fixStringNumber(trans.total));
export const getTransactionsAmount = (transaction: TransactionType[]) =>
   transaction.map((trans) => trans.amount);
export const getTransactionsTotalAmount = (array: TransactionType[]) =>
   array.reduce((prev, curr) => prev + curr.amount, 0);
export const getTransactionsBySym = (
   transaction: TransactionType[],
   sym: string
) => transaction.filter((trans) => trans.symbol === sym);

function generateDataObject(
   allYears: string[],
   transactions: TransactionType[]
) {
   const dates = getTransactionsDate(transactions).map((date) =>
      date.toString().slice(0, 4)
   );

   // const minYear = Math.min(...allYears, ...dataDates.map(date => date.getFullYear()));
   // const maxYear = Math.max(...allYears, ...dataDates.map(date => date.getFullYear()));
   // const uniqueYears = Array.from({ length: maxYear - minYear + 1 }, (_, index) => minYear + index);

   const uniqueYears = [...new Set([...dates, ...allYears])].sort();
   const finalDataObject = {};

   uniqueYears.forEach((year) => {
      const yearDataDates = transactions.filter(
         (trans) => trans.date.toString().slice(0, 4) === year
      );
      const compagnieData = yearDataDates.map((trans) => ({
         symbol: trans.symbol,
         amount: trans.amount,
      }));

      const tempData = {};

      compagnieData.forEach(
         (data) => (tempData[data.symbol] = data.amount ?? 0)
      );

      const toutesLesCompagnies = new Set(
         compagnieData.map((data) => data.symbol)
      );
      toutesLesCompagnies.forEach((compagnie) => {
         if (!tempData[compagnie]) {
            tempData[compagnie] = 0;
         }
      });

      finalDataObject[year] = Object.entries(tempData).map(
         ([symbol, amount]) => ({
            symbol,
            amount,
         })
      );
   });

   return finalDataObject;
}

// Exemple d'utilisation avec des données de dates aléatoires
// const finalData = generateDataObject(allYears, transactions);
export const getTransactionCompaniesAmountData = (
   transactions: TransactionType[]
) => {
   let expData = [];
   companies.forEach((sym) => {
      const filtered = transactions.filter((trans) => trans.symbol === sym);
      const totalAmount = filtered.reduce(
         (prev, curr) => prev + curr.amount,
         0
      );
      const comData = {
         sym: sym,
         transactions: filtered,
         totalAmount: totalAmount,
      };
      if (comData.totalAmount > 0) {
         expData = [...expData, comData];
      }
   });
   return expData;
};

export const getTransactionsCompaniesYearsData = (
   transactions: TransactionType[]
) => {
   const expectedCompaniesData = companies
      .map((sym) => ({
         sym,
         transactions: transactions.filter((trans) => trans.symbol === sym),
      }))
      .filter((data) => data.transactions.length > 0);

   const sym = expectedCompaniesData.map((c) => c.sym);
   const symTransactions = expectedCompaniesData.flatMap((c) => c.transactions);
   const compTransByDate = getTransactionsDate(symTransactions);
   const allYears = [
      ...new Set(compTransByDate.map((year) => year.slice(0, 4))),
   ].sort((a, b) => Number(a) - Number(b));
   const finalObj = generateDataObject(allYears, transactions);

   Object.entries(finalObj).forEach(([_, val]) => {
      sym.forEach((sy) => {
         if (!val.some((item) => item.symbol === sy)) {
            val.push({ symbol: sy, amount: 0 });
         }
      });
   });

   Object.entries(finalObj).forEach(([_, val]) => {
      let prev = 0;
      val.forEach((v) => {
         v.amount += prev;
         prev = v.amount;
      });
   });

   return finalObj;
};

// export const getTransactionsCompaniesYearsData = (array: TransactionType[]) => {
//    let expectedCompaniesData: any = [];
//    companies.forEach((sym) => {
//       const filtered = array.filter((trans) => trans.symbol === sym);
//       const totalArray = filtered.reduce((prev, curr) => prev + curr.amount, 0);
//       const comData = {
//          sym: sym,
//          transactions: filtered,
//          totalAmount: totalArray,
//       };
//       if (comData.totalAmount > 0) {
//          expectedCompaniesData.push(comData);
//       }
//    });

//    const sym = expectedCompaniesData.map((c) => c.sym);
//    const totalAmount = expectedCompaniesData.map((c) => c.totalAmount);
//    const transactions = expectedCompaniesData.map((c) => c.transactions);
//    const allTransactions = transactions.flatMap((c) => c);

//    const compTransByDate = getTransactionsDate(allTransactions);

//    const allYears = [
//       ...new Set(compTransByDate.map((year) => year.slice(0, 4))),
//    ].sort((a, b) => Number(a) - Number(b));

//    const finalObj = generateDataObject(allYears, allTransactions);

//    let tempData = finalObj;
//    // const uniqueSym = Object.values(finalObj).flatMap((arr) => arr);

//    Object.entries(finalObj).forEach(([key, val]) => {
//       // const valSym = val.map((v) => v.symbol);

//       const yearData = sym.map((sy) => {
//          const filtered = tempData[key].filter((arr) => arr.symbol === sy);
//          if (filtered.length <= 0) {
//             return [
//                {
//                   symbol: sy,
//                   amount: 0,
//                },
//             ];
//          } else return filtered;
//       });
//       tempData[key] = yearData.flatMap((c) => c);
//    });

//    // TODO Refac
//    Object.entries(finalObj).forEach(([key, val], index) => {
//       // const tempData[key] = val
//       // const [temKey, temVal] = Object.entries(tempData);
//       const yearData = val.map((v, i) => {
//          const prev =
//             index === 0
//                ? 0
//                : (Object.entries(finalObj)[index - 1][1].filter(
//                     (arr) => arr.symbol === v.symbol
//                  ).const = () => {
//                     return { ...v, amount: v.amount + prev };
//                  });
//       });
//    });
//    return finalObj;
// };
