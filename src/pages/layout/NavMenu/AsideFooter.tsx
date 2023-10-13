import { useContext } from "react";
import { ICustomerProps } from "./AsideMain";
import { CustomerContext } from "../../../state/CustomerContext";
import { useQueryData, useQueryPathApi } from "../../../hooks";
import { getRandomNum } from "../../../utils";
import NavGraph from "./NavGraphs";
import { useLocalData } from "../../../hooks/useLocalData";

const AsideFooter: React.FC<ICustomerProps> = ({ ctx }) => {
   const context = useContext(CustomerContext);
   // const fetchedCustomers = useQueryData();
   const { customers: jsonCustomers } = useLocalData();

   const setRandomCustomer = () => {
      // if (fetchedCustomers) {
      //    const length = fetchedCustomers.length - 1;
      //    // const randomNum = getRandomNum(length);
      //    const randomNum = 1;
      //    const randomCustomer = fetchedCustomers[randomNum];

      // const fetchCustomerAccounts = async () => {
      //    const customerTransaction = await Promise.all(customerAccounts.map(acc => fetch(acc)))
      // dispatch transaction
      // }

      //    context.dispatch({ type: "UPDATE_CUSTOMER", payload: randomCustomer });
      // }
      // if (!fetchedCustomers) {
      const length = jsonCustomers.length - 1;
      const randomNum = getRandomNum(length);
      const randomCustomer = jsonCustomers[randomNum];

      context.dispatch({ type: "UPDATE_CUSTOMER", payload: randomCustomer });
      // }
   };

   return (
      <div className="relative h-1/3 grid place-items-center text-sm">
         {ctx.account ? (
            <nav className="absolute top-2 animate-fade">
               <NavGraph />
            </nav>
         ) : (
            ""
         )}
         <div className="flex flex-col gap-4 items-center">
            <span
               onClick={() => setRandomCustomer()}
               className="px-2 py-1 shadow-lg bg-green-900 rounded hover:cursor-pointer"
            >
               Set A Random Customer
            </span>
            <span>And pick an account</span>
         </div>
      </div>
   );
};
export default AsideFooter;
