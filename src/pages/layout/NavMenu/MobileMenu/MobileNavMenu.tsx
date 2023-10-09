import { NavLink } from "react-router-dom";

const MobileNavMenu: React.FC = () => {
   return (
      <nav className="z-20 h-full w-2/5 flex flex-col items-start">
         <ul className="h-full flex flex-col items-center gap-2 font-bold">
            <li className="pl-4 py-1">
               <NavLink to={"/"}>{"Home"}</NavLink>
            </li>
            <li className="pl-4 py-1">
               <NavLink to={"/graphs"}>{"Dashboard"}</NavLink>
            </li>
            <NavLink to={"/"}>
               <li className="pl-4 py-1">{"Settings"}</li>
            </NavLink>
            <NavLink to={"/"}>
               <li className="pl-4 py-1">{"Logout"}</li>
            </NavLink>
         </ul>
      </nav>
   );
};
export default MobileNavMenu;
