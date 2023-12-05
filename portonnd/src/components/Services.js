import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description:
      "I deliver engaging design and optimized user experience. Lipsum is used to demonstrate creative concepts.",
  },
  {
    name: "Development",
    description:
      " I present innovative technology solutions. Lipsum is used to demonstrate the creative projects I have developed.",
  },
  {
    name: "Digital Marketing",
    description:
      " I created an effective and engaging digital marketing campaign. Lipsum was used to demonstrate the creative strategies I had devised.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I code and design user-friendly websites, leveraging various
              frameworks to create efficient digital solutions. I thrive on
              challenges, constantly learning and evolving to deliver innovative
              web experiences.
            </h3>
            <button className="btn btn-sm">
              <a href="#"> See my work</a>
            </button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((services, index) => {
                // destructure service
                const { name, description } = services;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 text-accent">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center "
                      >
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
