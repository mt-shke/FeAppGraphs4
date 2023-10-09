import { useContext } from "react";
import { CustomerContext } from "../../../../state/CustomerContext";
import { useLocation, useNavigate } from "react-router-dom";

const MobileNavCustomerIds: React.FC = () => {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const context = useContext(CustomerContext);
   const customer = context.state.customer;
   if (!customer) {
      return (
         <ul className="h-full flex flex-col gap-2 items-end font-bold"></ul>
      );
   }

   const setAccount = (account: number) => {
      context.dispatch({ type: "UPDATE_ACCOUNT", payload: account });
      if (pathname === "/") {
         navigate("/graphs/1");
      }
   };

   const selected = context.state.account;

   return (
      <ul className="z-20 h-full w-full grid gap-1 items-start pr-12 font-bold">
         <li className="pl-4 py-1">{customer.name}</li>
         <li className="pl-4 py-1">Accounts:</li>
         <li className="pl-4 py-1 grid grid-cols-2 gap-1">
            {customer.accounts.map((acc, ind) => (
               <span
                  className={`${
                     acc === selected ? "font-bold" : "font-normal opacity-30"
                  } text-sm hover:cursor-pointer`}
                  onClick={() => setAccount(acc)}
                  key={ind + acc}
               >
                  {acc}
               </span>
            ))}
         </li>
      </ul>
   );
};

export default MobileNavCustomerIds;
