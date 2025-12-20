"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

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
    category: "RepSet - Gym Management Platform",
    title: "RepSet",
    description:
      "A comprehensive, full-stack gym management platform built with Next.js, TypeScript, Prisma, tRPC, and Clerk authentication. Multi-tenant system that allows gym owners to manage facilities, members, staff, and operations with role-based access control.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "tRPC" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "Clerk" },
      { name: "Razorpay" },
    ],
    image: "/assets/work/thumb8.png",
    live: "https://repset.in",
    github: "https://github.com/Onezy-tech/repset",
  },
  {
    num: "02",
    category: "Onezy - Portfolio & Agency Website",
    title: "Onezy",
    description:
      "A modern, full-stack portfolio and agency website designed to showcase services, projects, and professional expertise. Features stunning UI with 3D visualizations, advanced animations, admin dashboard, and comprehensive content management system.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "Clerk" },
    ],
    image: "/assets/work/thumb7.png",
    live: "https://onezy.in/",
    github: "https://github.com/Onezy-tech/Onezy",
  },
  {
    num: "03",
    category: "Imagica - AI Image SaaS Platform",
    title: "Imagica",
    description:
      "An AI-driven image SaaS platform developed with Next.js, TypeScript, and MongoDB, offering advanced image processing features including AI-powered transformations, secure payment infrastructure, and comprehensive image management capabilities.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "MongoDB" },
      { name: "Node.js" },
      { name: "Cloudinary AI" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://imagica.vercel.app/",
    github: "https://github.com/ranjeet-singh-rawat/imagica-2",
  },
  {
    num: "04",
    category: "MoviesVerse - Movie Platform",
    title: "MoviesVerse",
    description:
      "A comprehensive movie recommendation platform built with React.js and Node.js, offering detailed movie information, ratings, reviews, and personalized recommendations. Features similar to IMDb with modern UI and seamless user experience.",
    stack: [
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST API" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://moviesverse-lemon.vercel.app/",
    github: "https://github.com/ranjeet-singh-rawat/moviesverse",
  },
  {
    num: "05",
    category: "EduWeb - Educational Institute Website",
    title: "EduWeb",
    description:
      "A professional educational institute website designed to showcase their work, experience, and services. Built with vanilla web technologies featuring responsive design and modern UI elements.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Responsive Design" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://eduweb-ashy.vercel.app/",
    github: "https://github.com/ranjeet-singh-rawat/EDUWEB",
  },
];

const work = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [project, setProject] = useState(projects[0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const index = swiper.activeIndex;
    setCurrentIndex(index);
    setProject(projects[index]);
  };

  const handlePrevProject = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setProject(projects[newIndex]);
    }
  };

  const handleNextProject = () => {
    if (currentIndex < projects.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setProject(projects[newIndex]);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto font-primary">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] xl:items-center">
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-center order-1 xl:order-none">
            <div className="flex flex-col gap-[20px]">
              <div className="text-6xl xl:text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>

              <h2 className="text-[28px] xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60 text-justify leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 justify-between xl:justify-start">
                <div className="flex items-center gap-4">
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="bg-white text-black rounded px-2 py-1">
                            View Live
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all">
                          <BsGithub className="text-white text-3xl group-hover:text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="bg-white text-black rounded px-2 py-1">
                            View Github
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>

                <div className="xl:hidden flex gap-2">
                  <button
                    className={`bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md ${
                      currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handlePrevProject}
                    disabled={currentIndex === 0}
                  >
                    <PiCaretLeftBold />
                  </button>
                  <button
                    className={`bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md ${
                      currentIndex === projects.length - 1
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={handleNextProject}
                    disabled={currentIndex === projects.length - 1}
                  >
                    <PiCaretRightBold />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] order-2 xl:order-none hidden xl:block">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="h-full">
                    <div className="h-[300px] xl:h-[520px] relative group flex justify-center items-center rounded-xl overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain w-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md"
                iconsStyles=""
                currentIndex={currentIndex}
                totalSlides={projects.length}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default work;
