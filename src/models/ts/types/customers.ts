export type CustomerType = {
   _id: string;
   username: string;
   name: string;
   address: string;
   birthdate: string;
   email: string;
   active?: boolean;
   accounts: number[];
   tier_and_details: TierDetailsType | {};
};

export type TierDetailsType = {
   tier: string;
   id: string;
   _id: string;
   active: boolean;
   benefits: string[];
};

export type TierAndDetailsType = {
   [key: string]: TierDetailsType;
};

export interface ICustomerProps {
   customer: CustomerType | null;
}
