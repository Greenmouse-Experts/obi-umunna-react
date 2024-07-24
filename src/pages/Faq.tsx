
import { useState } from "react";
import FaqAccordion from "../components/FaqAccordion";
import Breadcrumb from "../components/ui/Breadcrumb";


const Faq = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <>
      <Breadcrumb
        backgroundImage="/img/faq-banner.png"
        breadcrumbText="FAQ"
      />

      <section>
      <FaqAccordion
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
"
          index={0}
          open={openIndex === 0}
          toggleAccordion={toggleAccordion}
        />
        <FaqAccordion
          index={1}
          open={openIndex === 1}
          toggleAccordion={toggleAccordion}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
           <FaqAccordion
          index={2}
          open={openIndex === 2}
          toggleAccordion={toggleAccordion}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
      </section>
    </>
  );
};

export default Faq;
