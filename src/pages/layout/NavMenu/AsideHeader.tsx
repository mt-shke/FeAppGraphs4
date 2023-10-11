import Nav from "./Nav";

const AsideHeader: React.FC = () => {
   return (
      <div className="h-1/3 flex flex-col items-start">
         <div className="h-1/3 w-full flex flex-col items-center">
            <h1>Graphs App</h1>
            <p className="italic">Work in progress...</p>
         </div>
         <Nav />
      </div>
   );
};
export default AsideHeader;
