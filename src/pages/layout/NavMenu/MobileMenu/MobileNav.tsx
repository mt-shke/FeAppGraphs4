import CloseIcon from "../../../../components/ui/navigation/CloseIcon";
import MobileNavMenu from "./MobileNavMenu";
import MobileNavGraphs from "./MobileNavGraphs";
import MobileNavCustomerIds from "./MobileNavCustomerIds";
import { useLocalData } from "../../../../hooks/useLocalData";
import { getRandomNum } from "../../../../utils";
import { CustomerContext } from "../../../../state/CustomerContext";
import { useContext } from "react";
import { PiUserSwitchBold } from "react-icons/pi";

interface IMobileNavProps {
   onSetModal: () => void;
}

const MobileNav: React.FC<IMobileNavProps> = ({ onSetModal }) => {
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

   return (
      <>
         <div onClick={onSetModal} className="fixed z-10 inset-0"></div>
         <div className="fixed z-20 bottom-0 w-full h-48 flex flex-row items-center justify-between p-2 bg-main-grey4 animate-appearBottom">
            <div className="absolute z-30 bottom-32 right-8 flex flex-row gap-4 p-2">
               <div
                  onClick={setRandomCustomer}
                  className="h-8 aspect-square p-1 bg-green-800 rounded-full"
               >
                  <PiUserSwitchBold className="w-full h-full" />
               </div>
               <CloseIcon onClick={onSetModal} />
            </div>

            <MobileNavMenu />
            <MobileNavCustomerIds />
            <MobileNavGraphs />
         </div>
      </>
   );
};
export default MobileNav;
