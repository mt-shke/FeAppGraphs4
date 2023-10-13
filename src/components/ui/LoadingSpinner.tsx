const LoadingSpinner: React.FC = () => {
   return (
      <div className="h-10 aspect-square grid place-items-center bg-transparent">
         <div className="animate-spin w-full h-full rounded-full border-t-4 border-t-black"></div>
      </div>
   );
};
export default LoadingSpinner;
