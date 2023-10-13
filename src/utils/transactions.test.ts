import { TransactionType } from "../models/ts/types";
import { sortTransactions } from "./transaction";

describe("sortTransactions", () => {
   it("should sort transactions by date in ascending order", () => {
      // Créez des transactions de test non triées

      let unsortedTransactions: TransactionType[] = [
         {
            date: "2022-03-15",
            amount: 100,
            price: "50",
            total: "5000",
            transaction_code: "buy",
            symbol: "aapl",
         },
         {
            date: "2012-12-10",
            amount: 50,
            price: "60",
            total: "3000",
            transaction_code: "sell",
            symbol: "msft",
         },
         {
            date: "2001-12-10",
            amount: 50,
            price: "60",
            total: "3000",
            transaction_code: "sell",
            symbol: "msft",
         },
         {
            date: "2023-12-10",
            amount: 50,
            price: "60",
            total: "3000",
            transaction_code: "sell",
            symbol: "msft",
         },
      ];

      const result = sortTransactions(unsortedTransactions);

      const manuallySortedTransactions = [
         unsortedTransactions[2],
         unsortedTransactions[1],
         unsortedTransactions[0],
         unsortedTransactions[3],
      ];

      expect(result).toEqual(manuallySortedTransactions);
   });

   it("should return an empty array if there are no transactions", () => {
      const emptyTransactions: TransactionType[] = [];
      const result = sortTransactions(emptyTransactions);
      expect(result).toEqual([]);
   });
});
