"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPrisma,
  SiGraphql,
  SiAmazonaws,
  SiDocker,
  SiFirebase,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiPython,
  SiExpress,
  SiPostgresql,
  SiTrpc,
  SiGit,
  SiGithub,
  SiMongodb,
  SiBootstrap,
  SiVuedotjs,
  SiVercel,
  SiNetlify,
  SiOracle,
  SiPostman,
  SiSupabase,
  SiJsonwebtokens,
  SiSocketdotio,
  SiOpenai,
} from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const about = {
  title: "About Me",
  description:
    "I'm a Full Stack Developer with hands-on experience in building scalable, high-performance web applications. My focus lies in creating seamless and responsive user interfaces using modern tools like React, Next.js, and Node.js. Whether it's developing SaaS platforms or optimizing legacy systems, I thrive on solving complex challenges and delivering results. I'm always curious to learn new technologies and grow through collaboration.",
  info: [
    { fieldName: "Name", fieldValue: "Ranjeet Singh Rawat" },
    { fieldName: "Phone", fieldValue: "+91-6265410421" },
    { fieldName: "Experience", fieldValue: "2+ years" },
    {
      fieldName: "Email",
      fieldValue: (
        <a
          href="mailto:ranjeet843507@gmail.com"
          className="text-blue-400 hover:underline"
        >
          ranjeet843507@gmail.com
        </a>
      ),
    },
    {
      fieldName: "GitHub",
      fieldValue: (
        <a
          href="https://github.com/Ranjeet0302Singh"
          target="_blank"
          className="text-blue-400 hover:text-blue-300"
        >
          <FiExternalLink className="text-xl" />
        </a>
      ),
    },
    {
      fieldName: "LinkedIn",
      fieldValue: (
        <a
          href="https://linkedin.com/in/ranjeet-singh-rawat"
          target="_blank"
          className="text-blue-400 hover:text-blue-300"
        >
          <FiExternalLink className="text-xl" />
        </a>
      ),
    },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "Over the past few years, I've worked with startups and tech consultancies to build user-focused products. From optimizing legacy codebases to designing full-featured SaaS platforms, I've delivered scalable solutions that drive business outcomes.",
  items: [
    {
      company: "Starworks Prime",
      position: "Associate Technology Consultant",
      duration: "Jun 2024 – May 2025",
    },
    {
      company: "Shaurya Unitech Pvt Ltd",
      position: "Frontend Developer",
      duration: "Aug 2023 – Feb 2024",
    },
    {
      company: "D4 Community",
      position: "Co-Founder & Web Development Head",
      duration: "Sep 2022 – Nov 2023",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "I completed my B.Tech in Computer Science and Engineering from Chandigarh Group of Colleges. Alongside, I pursued online courses and practical projects to deepen my skills in full-stack web development.",
  items: [
    {
      institution: "Chandigarh Group of Colleges, Jhanjeri",
      degree: "B.Tech, Computer Science",
      duration: "Sep 2020 – Jun 2024",
    },
    {
      institution: "Model Higher Secondary School",
      degree: "Higher Secondary (12th)",
      duration: "Apr 2019 – Jul 2020",
    },
    {
      institution: "Model Higher Secondary School",
      degree: "Secondary (10th)",
      duration: "Apr 2017 – Jul 2018",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Here are the tools and technologies I work with regularly. I specialize in modern frontend and backend stacks and love experimenting with design systems, database optimization, and API integrations.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript (ES6+)" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiC />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiVuedotjs />, name: "Vue.js" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiTrpc />, name: "tRPC" },
    { icon: <SiSocketdotio />, name: "WebSockets" },
    { icon: <SiJsonwebtokens />, name: "JWT" },
    { icon: <TbBrandOauth />, name: "OAuth 2.0" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiOracle />, name: "Oracle Cloud" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiOpenai />, name: "OpenAI" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group transition-transform duration-300 hover:scale-110">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
