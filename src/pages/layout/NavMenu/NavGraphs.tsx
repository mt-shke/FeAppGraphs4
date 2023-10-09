import { NavLink } from "react-router-dom";

const NavGraph: React.FC = () => {
   return (
      <ul className="w-full h-full flex items-center justify-end gap-1 font-bold text-sm md:text-xs opacity-80">
         <NavLink to={"/graphs/1"}>
            <li className="py-1">{"Graphs-1"}</li>
         </NavLink>
         {`|`}
         <NavLink to={"/graphs/2"}>
            <li className="py-1">{"Graphs-2"}</li>
         </NavLink>
         {`|`}
         <NavLink to={"/graphs/3"}>
            <li className="py-1">{"Graphs-3"}</li>
         </NavLink>
      </ul>
   );
};
export default NavGraph;
