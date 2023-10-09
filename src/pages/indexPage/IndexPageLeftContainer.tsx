import Container from "../../components/ui/container/Container";

const IndexPageLeftContainer: React.FC = () => {
   return (
      <div className="h-screen md:h-full w-full py-1 md:col-start-1 md:col-end-3">
         <section className="h-full w-full flex flex-col gap-2 p-2 bg-main-grey4 rounded">
            <Container customStyle="w-full h-1/3 bg-main-black2" />
            <Container customStyle="w-full h-2/3 bg-main-grey" />
         </section>
      </div>
   );
};

export default IndexPageLeftContainer;
