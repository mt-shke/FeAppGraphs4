// @ts-nocheck
// ts-nocheck disables type checking for the entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import { fixStringNumber } from ".";
import {
   AllTransactionsType,
   TransactionType,
   companies,
} from "../models/ts/types";
import { ICustomerState } from "../state/CustomerContext";
import { dateToEnFormat, dateToUnix } from "./dates";

// Return sorted transactions
export const sortTransactions = (
   transactions: TransactionType[]
): TransactionType[] => {
   const transactionsArray = Object.values(transactions);
   if (transactionsArray.length <= 0) {
      return [];
   }
   const sorted = transactionsArray.sort(
      (a, b) => dateToUnix(a.date) - dateToUnix(b.date)
   );
   return sorted;
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
   let result = [];
   if (ctx.account && ctx.transactions) {
      const firstBucketTransactions = getAccountBucketTransactions(ctx);
      const sorted = sortTransactions(firstBucketTransactions);
      const filtered = sorted.filter(
         (trans) => trans.transaction_code === transactionCode
      );
      if (filtered.length < 1) {
         return result;
      }
      result = [...filtered];
   }
   return result;
};

// // // // // // // // // // // // //
// ALL TRANSACTION DATA FUNCTIONS //
export const getTransactionsCode = (transactions: TransactionType[]) =>
   transactions.map((trans) => trans.transaction_code)[0]?.toString() ?? "";
export const getTransactionsPrice = (transactions: TransactionType[]) =>
   transactions.map((trans) => fixStringNumber(trans.price));
export const getTransactionsDate = (transactions: TransactionType[]) =>
   transactions.map((trans) => dateToEnFormat(trans.date));
export const getTransactionsTotal = (transactions: TransactionType[]) =>
   transactions.map((trans) => fixStringNumber(trans.total));
export const getTransactionsAmount = (transactions: TransactionType[]) =>
   transactions.map((trans) => trans.amount);
export const getTransactionsTotalAmount = (array: TransactionType[]) =>
   array.reduce((prev, curr) => prev + curr.amount, 0);
export const getTransactionsBySym = (
   transactions: TransactionType[],
   sym: string
) => transactions.filter((trans) => trans.symbol === sym);

export const generateDataObject = (
   allYears: string[],
   transactions: TransactionType[]
) => {
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
};

export const getTransactionCompaniesAmountData = (
   transactions: TransactionType[]
) => {
   let expData = [];
   if (transactions.length < 1) {
      return [];
   }
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
