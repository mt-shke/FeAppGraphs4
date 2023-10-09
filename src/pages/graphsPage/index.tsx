import React, { useEffect } from "react";
import {
   Outlet,
   useLocation,
   useNavigate,
   useOutletContext,
} from "react-router-dom";
import { ICustomerState } from "../../state/CustomerContext";

const GraphsPage = () => {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const context = useOutletContext() as ICustomerState;

   useEffect(() => {
      if (pathname === "/graphs" || pathname === "/graphs/") {
         navigate("/graphs/1");
      }
   }, [pathname]);

   return (
      <section className="flex flex-1">
         <Outlet context={context} />
      </section>
   );
};

export default GraphsPage;
