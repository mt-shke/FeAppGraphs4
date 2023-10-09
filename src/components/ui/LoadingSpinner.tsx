interface ILoadingSpinnerProps {
   status?: "loading";
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({ status }) => {
   if (status === "loading") {
      return (
         <div className="h-20 aspect-square grid place-items-center">
            <div className="animate-spin w-full h-full rounded-full border-t-4 border-t-black"></div>
         </div>
      );
   }
   return (
      <div className="w-full h-full grid place-items-center">
         <div className="bg-black-main">__</div>
      </div>
   );
};
export default LoadingSpinner;
