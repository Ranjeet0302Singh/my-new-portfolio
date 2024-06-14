"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "NextJs Full Stack ",
    title: "Project 1",
    description:
      "An AI-driven image SaaS platform developed with Next.js, TypeScript, MongoDB, and several other modern technologies, offering advanced image processing features and a secure payment infrastructure.",
    stack: [
      { name: "NextJs" },
      { name: "Tailwind CSS" },
      { name: "NodeJs" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://imagica.vercel.app/",
    github: "https://github.com/Ranjeet0302Singh/imagica-2",
  },
  {
    num: "02",
    category: "NextJs weather Forecast Site",
    title: "Project 2",
    description:
      "A Next.js application that uses aceternity ui  and the OpenWeather API to provide current weather information based on the user’s location.",
    stack: [
      { name: "NextJs" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://nextjs-weather-forecast-app.vercel.app/",
    github: "https://github.com/Ranjeet0302Singh/weather-app",
  },
  {
    num: "03",
    category: "Sports Streaming Website",
    title: "Project 3",
    description:
      "A React.js and PHP-based website providing real-time updates, live scores, and detailed match statistics.",
    stack: [{ name: "ReactJs" }, { name: "Javascript" }, { name: "PHP" }],
    image: "/assets/work/thumb3.png",
    live: "https://thecricketbaadshah.com/",
    github: "https://github.com/Ranjeet0302Singh/streaming-site",
  },
  {
    num: "04",
    category: "Frontend Website",
    title: "Project 4",
    description:
      "A website of the institute to showcase their work and experience",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/thumb4.png",
    live: "https://eduweb-ashy.vercel.app/",
    github: "https://github.com/Ranjeet0302Singh/EDUWEB",
  },
  {
    num: "05",
    category: "Tic Tac Toe Game",
    title: "Project 5",
    description:
      "A website of the institute to showcase their work and experience",
    stack: [{ name: "React" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/thumb5.png",
    live: "https://tic-tac-toe-psi-two-46.vercel.app/",
    github: "https://github.com/Ranjeet0302Singh/tic-tac-toe",
  },
  {
    num: "06",
    category: "Textutils ",
    title: "Project 6",
    description:
      "TextUtils is the site where you can do some experiments on the text based on your requirement",
    stack: [{ name: "React" }, { name: "Bootstrap" }, { name: "JavaScript" }],
    image: "/assets/work/thumb6.png",
    live: "https://textutils-reactjs-webapp.netlify.app/",
    github: "https://github.com/Ranjeet0302Singh/textutils",
  },
  {
    num: "07",
    category: "Online Learning and Teaching Platform",
    title: "Project 7",
    description:
      "Built using the MERN stack, featuring subscription-based access to video courses, secure payment gateways, and an intuitive user dashboard.",
    stack: [
      { name: "React" },
      { name: "NodeJs" },
      { name: "ExpressJs" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb7.png",
    live: "https://github.com/Ranjeet0302Singh/edtech-frontend",
    github: "https://github.com/Ranjeet0302Singh/edtech-backend",
  },
];

const work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="  min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto font-primary">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className=" w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className=" flex flex-col gap-[30px] h-[50%]">
              <div className=" text-8xl leading-none font-extrabold  text-outline">
                {project.num}
              </div>

              <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className=" text-white/60">{project.description}</p>

              <ul className=" flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className=" border border-white/20"></div>
              <div className=" flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className=" text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className=" bg-white text-black rounded">
                          View Live
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className=" text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className=" bg-white text-black rounded">
                          View Github
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className=" w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className=" xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="responsive"
                      width={500}
                      height={500}
                      onClick={() => setProject(project)}
                    />
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transtition-all"
                iconsStyles={""}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default work;
