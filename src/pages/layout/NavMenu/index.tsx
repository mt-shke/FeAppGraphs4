import { ICustomerState } from "../../../state/CustomerContext";
import AsideFooter from "./AsideFooter";
import AsideHeader from "./AsideHeader";
import AsideMain from "./AsideMain";
import MobileMenu from "./MobileMenu";

interface INavMenu {
   ctx: ICustomerState;
   media: string | undefined;
}

const NavMenu: React.FC<INavMenu> = ({ ctx, media }) => {
   if (media === "mobile") {
      return <MobileMenu ctx={ctx} />;
   }
   return (
      <>
         <div className="block md:hidden">
            <MobileMenu ctx={ctx} />
         </div>
         <aside
            className="hidden h-screen grid grid-rows-3 p-4 
        md:block md:h-screen md:text-sm md:w-[240px] md:min-w-[240px] lg:w-[260px] lg:min-w-[260px] md:min-h-[780px] 
         lg:text-base bg-main-black text-main-white overflow-hidden"
         >
            <AsideHeader />
            <AsideMain ctx={ctx} />
            <AsideFooter ctx={ctx} />
         </aside>
      </>
   );
};

export default NavMenu;
