import IndexPageLeftContainer from "./IndexPageLeftContainer";
import IndexPageSection from "./IndexPageSection";

const IndexPage = () => {
   return (
      <section className="flex flex-1 flex-col py-1 md:grid md:grid-rows-3 lg:grid-rows-1 lg:grid-cols-5 lg:gap-2">
         <IndexPageLeftContainer />
         <IndexPageSection />
      </section>
   );
};

export default IndexPage;
