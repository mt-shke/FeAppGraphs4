export type TransactionType = {
   date: string;
   amount: number;
   price: string;
   total: string;
   transaction_code: "buy" | "sell";
   symbol: TransactionSymbolType;
};

export type TransactionsBucketType = {
   _id: string;
   account_id: number;
   transaction_count: number;
   bucket_start_date: string;
   bucket_end_date: string;
   transactions: Record<string, TransactionType>;
   // transactions: Map<string, TransactionType>;
};

type TransactionSymbolType =
   | "adbe"
   | "team"
   | "msft"
   | "sap"
   | "nflx"
   | "ibm"
   | "amd"
   | "znga"
   | "amzn"
   | "ebay"
   | "csco"
   | "nvda"
   | "fb"
   | "goog"
   | "intc"
   | "crm"
   | "bb"
   | "aapl";

export const companies = [
   "adbe",
   "team",
   "msft",
   "sap",
   "nflx",
   "ibm",
   "amd",
   "znga",
   "amzn",
   "ebay",
   "csco",
   "nvda",
   "fb",
   "goog",
   "intc",
   "crm",
   "bb",
   "aapl",
];
