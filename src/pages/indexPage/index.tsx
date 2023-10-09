import IndexPageLeftContainer from "./IndexPageLeftContainer";
import IndexPageSection from "./IndexPageSection";

const IndexPage = () => {
   return (
      <section className="w-full h-full flex flex-col py-1 lg:grid lg:grid-cols-5 lg:gap-2">
         <IndexPageLeftContainer />
         <IndexPageSection />
      </section>
   );
};

export default IndexPage;
