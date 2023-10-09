import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ErrorPage: React.FC = () => {
   const { pathname } = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      setTimeout(() => {
         navigate("/");
      }, 500);
   }, [pathname]);

   return (
      <div className="w-full h-full p-2 my-2 rounded bg-main-grey4">
         <p className="w-full py-12 px-6 bg-main-grey2 text-left italic">
            Work in progress... you will be redirected in a moment.
         </p>
      </div>
   );
};
export default ErrorPage;
