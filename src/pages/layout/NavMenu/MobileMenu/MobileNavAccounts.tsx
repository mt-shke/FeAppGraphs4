import { useContext } from "react";
import { useLocalData } from "../../../../hooks/useLocalData";
import { CustomerContext } from "../../../../state/CustomerContext";
import { getRandomNum } from "../../../../utils";

const MobileNavAccounts: React.FC = () => {
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
   return <div></div>;
};
export default MobileNavAccounts;
