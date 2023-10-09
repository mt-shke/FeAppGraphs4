import { useContext } from "react";
import {
   CustomerContext,
   ICustomerState,
} from "../../../state/CustomerContext";
import { useLocation, useNavigate } from "react-router-dom";

export interface ICustomerProps {
   ctx: ICustomerState;
}

const AsideMain: React.FC<ICustomerProps> = ({ ctx }) => {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const context = useContext(CustomerContext);
   if (!ctx.customer) {
      return (
         <div className="h-1/3 flex items-center border-t-[1px] border-b-[1px] border-main-white"></div>
      );
   }

   const setAccount = (account: number) => {
      context.dispatch({ type: "UPDATE_ACCOUNT", payload: account });
      if (pathname === "/") {
         navigate("/graphs/1");
      }
   };

   const selected = ctx.account;

   // TODO text-ellipsis
   return (
      <div className="relative h-1/3 w-full flex items-start py-8 border-t-[1px] border-b-[1px] text-sm border-main-white">
         <ul className="flex flex-col gap-2 font-bold">
            <li className="pl-4 py-1 truncate">{ctx.customer.username}</li>
            <li className="pl-4 py-1 truncate">{ctx.customer.name}</li>
            <li className="pl-4 py-1 truncate">{ctx.customer.email}</li>
            <li className="pl-4 py-1  flex flex-row gap-2">
               <span>Accounts:</span>
               <span className="grid grid-cols-2 gap-1">
                  {ctx.customer.accounts.map((acc, ind) => (
                     <span
                        className={`${
                           acc === selected
                              ? "font-bold"
                              : "font-normal opacity-30"
                        } text-sm hover:cursor-pointer`}
                        onClick={() => setAccount(acc)}
                        key={ind + acc}
                     >
                        {acc}
                     </span>
                  ))}
               </span>
            </li>
         </ul>
      </div>
   );
};

export default AsideMain;
