import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import img1 from "../assets/bg-vscode.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-x-10 ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 "
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-md md:max-w-sm mb-16 ">
                Allow me to present a compilation of my work, showcasing the
                diverse projects and experiences that reflect my skills and
                creativity in action.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:border-orange-400  ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300 "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={img1}
                alt=""
              />
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">UI/UX Designer</span>
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <div className="text-3xl text-white ">Project Title</div>
              </div>
            </div>
          </motion.div>
          <div className="flex-1  flex flex-col gap-y-10">
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:border-orange-400">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300 "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={img1}
                alt=""
              />
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">UI/UX Designer</span>
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <div className="text-3xl text-white ">Project Title</div>
              </div>
            </div>
            {/* image */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:border-orange-400 lg:mt-4  "
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300 "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={img1}
                alt=""
              />
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">UI/UX Designer</span>
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <div className="text-3xl text-white ">Project Title</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
