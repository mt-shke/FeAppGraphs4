import { useContext } from "react";
import { ICustomerProps } from "./AsideMain";
import { CustomerContext } from "../../../state/CustomerContext";
// import { useQueryPathApi } from "../../../hooks";
import { getRandomNum } from "../../../utils";
import { useLocalData } from "../../../hooks/useLocalData";
import NavGraph from "./NavGraphs";

const AsideFooter: React.FC<ICustomerProps> = ({ ctx }) => {
   const context = useContext(CustomerContext);
   // const { data } = useQueryPathApi("customers");
   const { customers } = useLocalData();

   const setRandomCustomer = () => {
      // if (data) {
      //    const length = data.customers.length - 1;
      //    const randomNum = getRandomNum(length);
      //    const randomCustomer = data.customers[randomNum];
      //    context.dispatch({ type: "UPDATE_CUSTOMER", payload: randomCustomer });
      // }
      // if (!data) {
      const length = customers.length - 1;
      const randomNum = getRandomNum(length);
      const randomCustomer = customers[randomNum];
      context.dispatch({ type: "UPDATE_CUSTOMER", payload: randomCustomer });
      // }
   };

   return (
      <div className="relative h-1/3 grid place-items-center text-sm">
         {ctx.account ? (
            <nav className="absolute top-2 right-2 animate-fade">
               <NavGraph />
            </nav>
         ) : (
            ""
         )}
         <span
            onClick={() => setRandomCustomer()}
            className="px-2 py-1 shadow-lg bg-green-900 rounded"
         >
            Set A Random Customer
         </span>
      </div>
   );
};
export default AsideFooter;
