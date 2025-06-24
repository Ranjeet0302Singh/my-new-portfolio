"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import Social from "@/components/Social";
import MagicButton from "@/components/MagicButton";
const Contact = () => {
  return (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className=" min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        id="contact"
      >
        <div className="flex flex-col items-center justify-center text-center ">
          <h1 className="h3   xl:text-[35px] ">
            Ready to take <span className="text-accent">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:ranjeet843507@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16  md:flex-row flex-col justify-around items-center gap-6 ">
          <p className="md:text-base text-sm md:font-normal font-light">
            Made by Ranjeet Singh Rawat
          </p>

          <div>
            <Social
              containerStyles="flex gap-6 "
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>
      </motion.div>
  );
};

export default Contact;
