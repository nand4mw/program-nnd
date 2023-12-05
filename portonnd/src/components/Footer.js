import React from "react";
import { Variant, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Banner from "./Banner";

const useFooter = () => {
  return (
    <footer className="py-8 mb-20 max-md:hidden">
      <div className="container md:flex hidden items-center justify-between mx-auto">
        <h1 className="text-accent text-2xl ">AnandaMw</h1>
        <ul>
          <li className="flex gap-8">
            <a href="{}">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default useFooter;
