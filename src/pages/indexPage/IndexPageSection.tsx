import Container from "../../components/ui/container/Container";

const IndexPageSection: React.FC = () => {
   return (
      <div className="h-screen md:h-full w-full py-1 md:col-start-3 md:col-end-6">
         <section className="w-full h-full p-2 md:col-start-3 md:col-end-6 bg-main-grey4 rounded">
            <Container customStyle="w-full h-full bg-main-grey3"></Container>
         </section>
      </div>
   );
};
export default IndexPageSection;
