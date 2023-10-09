import React, { useEffect } from "react";
import useElementSize from "../../hooks/useElementSize";
import { ICustomerState } from "../../state/CustomerContext";
import NavMenu from "./NavMenu";
import useIsMobile from "../../hooks/useIsMobile";

interface ILayout {
   children: React.ReactNode;
   ctx: ICustomerState;
}

const Layout: React.FC<ILayout> = ({ children, ctx }) => {
   const [mainRef, { media }] = useElementSize();
   const isMobile = useIsMobile(navigator.userAgent);
   useEffect(() => {}, [media]);

   return (
      <main
         ref={mainRef}
         className="relative min-h-screen w-screen w-full flex flex-row items-start font-ptserif"
      >
         <NavMenu ctx={ctx} media={isMobile} />
         <section className="flex flex-1 px-2 md:h-screen md:min-h-[780px]">
            {children}
         </section>
      </main>
   );
};
export default Layout;
