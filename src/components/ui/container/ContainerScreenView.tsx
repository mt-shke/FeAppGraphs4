interface IContainerScreenViewProps {
   children?: React.ReactNode;
}

const ContainerScreenView: React.FC<IContainerScreenViewProps> = ({
   children,
}) => {
   return (
      <div className="h-screen w-full py-1 md:h-full md:min-h-max">
         {children}
      </div>
   );
};
export default ContainerScreenView;
