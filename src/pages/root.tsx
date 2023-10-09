import { Outlet } from "react-router-dom";
import Layout from "./layout";
import { CustomerContext, ICustomerState } from "../state/CustomerContext";
import { useContext, useEffect } from "react";
import { useLocalData } from "../hooks/useLocalData";
// import { useQueryPathApi } from "../hooks";

const Root: React.FC = () => {
   const { customers } = useLocalData();
   const ctx = useContext(CustomerContext);

   // const { isLoading, error, data, isFetching, pathname } =
   //    useQueryPathApi("customers");

   useEffect(() => {
      ctx.dispatch({
         type: "UPDATE_CUSTOMER",
         payload: customers[Math.random() * 100],
      });
      // if (data) {
      //    ctx.dispatch({
      //       type: "UPDATE_CUSTOMER",
      //       payload: data.customers[118],
      //    });
      // }
   }, [customers]);

   return (
      <Layout ctx={ctx.state}>
         <Outlet context={ctx.state as ICustomerState} />
      </Layout>
   );
};
export default Root;
