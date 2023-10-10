import Container from "../../components/ui/container/Container";

const IndexPageSection: React.FC = () => {
   return (
      <div className="w-full flex flex-1 py-1 md:min-h-0 md:row-start-2 md:row-end-4 lg:row-span-1 lg:col-start-3 lg:col-end-6">
         <section className="flex flex-1 p-2 md:col-start-3 md:col-end-6 bg-main-grey4 rounded">
            <Container customStyle="flex flex-1 bg-main-grey3 overflow-y-scroll">
               <article className="flex flex-col gap-3 px-2 py-4">
                  <h2 className="pt-4 pb-2 text-xl font-bold">
                     Solve problems
                  </h2>
                  <p>
                     In today's data-driven world, data analytics is a
                     game-changer for organizations seeking to understand and
                     solve complex problems. It offers several key advantages:
                  </p>
                  <p>
                     <span className="font-bold">
                        {" "}
                        Informed Decision-Making:{" "}
                     </span>{" "}
                     Data analytics provides valuable insights, enabling
                     organizations to make well-informed decisions based on
                     evidence rather than assumptions.
                  </p>
                  <p>
                     <span className="font-bold"> Root Cause Analysis: </span>{" "}
                     It helps uncover the root causes of complex issues,
                     allowing for targeted solutions rather than surface-level
                     fixes.
                  </p>
                  <p>
                     <span className="font-bold"> Predictive Insights: </span>{" "}
                     Data analytics can predict future trends, helping
                     organizations proactively address potential challenges and
                     opportunities.
                  </p>
                  <p>
                     <span className="font-bold"> Efficiency: </span> It
                     streamlines the problem-solving process, saving time and
                     resources by automating data processing and analysis.
                  </p>
                  <p>
                     <span className="font-bold"> Customization: </span> Data
                     analytics allows for tailored solutions, recognizing that
                     every problem is unique and requires a specific approach.
                  </p>
                  <p>
                     <span className="font-bold">
                        {" "}
                        Continuous Improvement:{" "}
                     </span>{" "}
                     Organizations can use data analytics to monitor the impact
                     of their solutions over time, leading to ongoing refinement
                     and optimization.
                  </p>
                  <p>
                     In summary, data analytics empowers organizations to
                     navigate complexity with confidence. It's a tool for
                     precision, efficiency, and continuous improvement, aligning
                     perfectly with our vision at Applytics to redefine
                     problem-solving through data-driven insights.
                  </p>
               </article>
            </Container>
         </section>
      </div>
   );
};
export default IndexPageSection;
