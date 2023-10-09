import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
   return (
      <nav className="h-2/3 flex flex-col items-start justify-between border-main-white">
         <ul className="flex flex-col gap-2 font-bold">
            <li className="pl-4 py-1">
               <NavLink className="relative custom-underline" to={"/"}>
                  {"Home"}
               </NavLink>
            </li>
            <li className="pl-4 py-1">
               <NavLink className="relative custom-underline" to={"/graphs"}>
                  {"Dashboard - Graphs"}
               </NavLink>
            </li>
            {/* <li className="pl-4 py-1">
               <NavLink className="relative custom-underline" to={"/settings"}>
                  {"Settings"}
               </NavLink>
            </li>
            <li className="pl-4 py-1">
               <NavLink className="relative custom-underline" to={"/logout"}>
                  {"Logout"}
               </NavLink>
            </li> */}
         </ul>
      </nav>
   );
};

export default Nav;
