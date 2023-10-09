// type PartiallyApplicableUnion<F extends (...payload: any[]) => any> =
//   F extends (...args: infer Args) => infer ReturnV
//     ? Args extends []
//       ? F
//       : Args extends [any]
//       ? F | (() => PartiallyApplicable<F>)
//       :
//           | (() => PartiallyApplicable<F>)
//           | ((
//               ...args: GetFirstParam<Parameters<F>>
//             ) => PartiallyApplicable<
//               (...argRest: GetRestParam<Parameters<F>>) => ReturnV
//             >)
//           | PrependArg<
//               PartiallyApplicableUnion<
//                 (...argRest: GetRestParam<Parameters<F>>) => ReturnV
//               >,
//               GetFirstParam<Parameters<F>>
//             >
//     : never;

// import { ICustomerState } from "../../../state/CustomerContext";
// import { TransactionType, TransactionsBucketType } from "./transactions";

// type getTransactionsType<F extends (...payload: any[]) => any> = F extends (
//    ...args: infer Args
// ) => infer ReturnV
//    ? Args extends []
//       ? F
//       : Args extends [any]
//       ? F | (() => PartiallyApplicable<F>)
//       :
//            | (() => PartiallyApplicable<F>)
//            | ((
//                 ...args: GetFirstParam<Parameters<F>>
//              ) => PartiallyApplicable<
//                 (...argRest: GetRestParam<Parameters<F>>) => ReturnV
//              >)
//            | PrependArg<
//                 PartiallyApplicableUnion<
//                    (...argRest: GetRestParam<Parameters<F>>) => ReturnV
//                 >,
//                 GetFirstParam<Parameters<F>>
//              >
//    : never;

// type Type = 'default' | 'employee' | 'customer';

// function findUserNow<T extends Type = 'default'>(id: number, userType?: T): T extends 'default' ? IUser : T extends 'customer' ? ICustomer : IEmployee
// {
//     return {} as any;
// }

// type transactionCode = undefined | "buy" | "sell";

// function sortTransactions<T extends transactionCode = undefined>(
//   transactions: Record<string, TransactionType>,
//    transactionCode?: T
// ): any {
//    if (ctx.account && ctx.transactions) {
//       const transactionBucket = ctx.transactions.filter(
//          (acc) => acc.account_id === ctx.account
//       )[0];

//       const transactionsArray = Object.values(transactions);

// if (transactionCode) {
//   const filtered = transactionsArray.filter(tran => tran.transaction_code === transactionCode)
//    return filtered
// }

// return transactionBucket

//    }
// }

//    const sortTransactions = (
//     transactions: Record<string, TransactionType>,
//     transactionCode?:string
//  ) => {
//     const transactionsArray = Object.values(transactions);
//     if (!transactionsArray.length) {
//        return false;
//     }

//     const byDates = transactionsArray.sort(
//        (a, b) => dateToUnix(a.date) - dateToUnix(b.date)
//     );

//     if (transactionCode) {
//        return byDates.filter(
//           (trans) => trans.transaction_code === transactionCode
//        );
//     }

//     const buy = byDates.filter((trans) => trans.transaction_code === "buy");
//     const sell = byDates.filter((trans) => trans.transaction_code === "sell");
//     return { buy, sell, byDates };
//  };
