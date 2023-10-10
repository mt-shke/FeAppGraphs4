import Container from "../../components/ui/container/Container";

const IndexPageLeftContainer: React.FC = () => {
   return (
      <div className=" flex flex-1 py-1 md:min-h-max md:row-start-1 md:row-end-2 lg:col-start-1 lg:row-span-1 lg:col-end-3">
         <section className="flex flex-1 flex-col md:flex-row lg:flex-col gap-2 p-2 bg-main-grey4 rounded text-white">
            <Container customStyle="flex md:h-full lg:h-1/3 bg-main-black2 overflow-y-scroll">
               <article className="flex flex-1 flex-col gap-3 px-2 py-6">
                  <h1 className="text-xl font-bold">
                     <strong>Graphs</strong>
                  </h1>
                  <p>
                     {`We aim to redefine problem-solving by harnessing the
                     immense power of data analytics. We believe that data is
                     the compass that guides organizations through turbulent
                     waters, helping them make precise decisions, identify
                     opportunities, and overcome major challenges.`}
                  </p>
               </article>
            </Container>
            <Container customStyle="flex md:h-full lg:h-2/3 bg-main-grey overflow-y-scroll">
               <article className="flex flex-1 flex-col gap-3 px-2 py-6">
                  <h2 className="font-bold">Our Vision at Graphs</h2>
                  <p>
                     {`In summary, data analytics empowers organizations to
                     navigate complexity with confidence. It's a tool for
                     precision, efficiency, and continuous improvement, aligning
                     perfectly with our vision at Graphs to redefine
                     `}
                     <strong>{`problem-solving`}</strong>
                     {` through data-driven
                     insights.`}
                  </p>
               </article>
            </Container>
         </section>
      </div>
   );
};

export default IndexPageLeftContainer;
