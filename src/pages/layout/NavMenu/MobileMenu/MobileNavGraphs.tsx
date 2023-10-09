import { useContext } from "react";
import { useLocalData } from "../../../../hooks/useLocalData";
import { CustomerContext } from "../../../../state/CustomerContext";
import { getRandomNum } from "../../../../utils";
import { NavLink } from "react-router-dom";

const MobileNavGraphs: React.FC = () => {
   const context = useContext(CustomerContext);
   // const { data } = useQueryPathApi("customers");
   const { customers } = useLocalData();
   const setRandomCustomer = () => {
      const length = customers.length - 1;
      const randomNum = getRandomNum(length);
      const randomCustomer = customers[randomNum];
      context.dispatch({ type: "UPDATE_CUSTOMER", payload: randomCustomer });
      // }
   };

   if (!context.state.customer) {
      return (
         <div className="absolute z-30 bottom-0 right-0 flex items-end"></div>
      );
   }

   return (
      <div className="absolute z-30 h-20 bottom-0 right-0 flex items-end">
         <ul className="flex flex-col gap-2 p-4 font-bold">
            <li className="pl-4 py-1 relative flex flex-col w-full h-full">
               <span className="pl-4 py-1">
                  <NavLink to={"/graphs/1"}>{"G1"}</NavLink>
               </span>
               <span className="pl-4 py-1">
                  <NavLink to={"/graphs/2"}>{"G2"}</NavLink>
               </span>
               <span className="pl-4 py-1">
                  <NavLink to={"/graphs/3"}>{"G3"}</NavLink>
               </span>
            </li>
         </ul>
      </div>
   );
};
export default MobileNavGraphs;
