import { motion } from "motion/react"
import AboutSection from "./AboutSection"
import ExperienceCard from "./ExperienceCard"
import ProjectCard from "./ProjectCard"
import Footer from "./Footer"
import { lazy, useEffect, useState } from "react"
import { colorPalette } from "../lib/colorPalette"
import { Data } from "../../types"

const BackgroundWithLines = lazy(() => import("./BackgroundWithLines"))

export default function CreativeTheme() {
  const [data, setData] = useState({
    palette: "p1",
    fullName: "ABHISHEK TIWARI",
    title: "Ye Title Hai",
    description: "FRONT-END DEVELOPER, UI-ENGINEER, & DESIGNER",
    about:
      "<p>I'm a developer who creates accessible, pixel-perfect user interfaces combining thoughtful design with solid engineering. My passion lies where design meets development—building experiences that are visually appealing while optimized for performance and usability. I'm dedicated to crafting interfaces that not only look great but function flawlessly, bridging the gap between aesthetics and technical excellence while prioritizing accessibility throughout the development process. <br /><br /> Currently serving as a Senior Front-End Engineer at Klaviyo with a focus on accessibility, I help develop and maintain UI components powering the platform's frontend. My work ensures our product adheres to web accessibility standards and best practices, creating an inclusive experience for all users. </p>",
    Github: "github.com",
    LinkedIn: "linkedin.com",
    Gmail: "abhishek.tiwari2003@gmail.com",
    experiences: [
      {
        fromYear: "2023",
        toYear: "PRESENT",
        designation: "Junior Frontend Engineer",
        company: "Microsoft",
        workSummary:
          "<p>Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>",
        technologies: [
          "React",
          "Typescript",
          "Tailwind",
          "Zod",
          "Shadcn",
          "Framer",
        ],
      },
    ],
    projects: [
      {
        title: "Realtime Movie Ticket Booking App",
        description:
          "<p>A web app which handles movie ticket bookings, and has features such as handling concurrent bookings, and optimized with lazy loading and code splitting</p>",
        keyFeatures: [
          "Real-time image generation with adjustable parameters",
          "3D visualization of the image generation process",
          "Save and share generated images",
        ],
        codeLink: "uygidag",
        demoLink: "arhgasdg",
        technologies: [
          "React",
          "Typescript",
          "Tailwind",
          "Zod",
          "Shadcn",
          "Framer",
        ],
      },
    ],
  })
  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Couldn't load data.json, using fallback data", error)
      })
  }, [])
  const {
    palette,
    fullName,
    description,
    about,
    LinkedIn,
    Github,
    Gmail,
    experiences,
    projects,
  } = data as Data

  const colors = colorPalette[palette]

  return (
    <div className={`h-screen w-full relative bg-${colors.bg2}`}>
      <BackgroundWithLines palette={palette} />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full px-2">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, damping: 0.3 }}
          className="font-bold text-center space md:tracking-wider text-white text-md sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          {fullName}
        </motion.h1>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, damping: 0.3 }}
          className="font-semibold text-white text-center mt-3 text-sm sm:text-md md:text-lg md:tracking-wide lg:text-2xl lg:tracking-wider xl:text-4xl xl:tracking-widest"
        >
          {description}
        </motion.h3>
      </div>
      <AboutSection about={about} />

      <div className="bg-slate-950 pt-20 px-3 sm:px-4 md:px-16 lg:px-24">
        <p className="text-slate-200 text-md sm:text-lg md:text-xl lg:text-3xl font-bold whitespace-nowrap pb-8">
          Experience
        </p>
        {experiences?.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
      <div className="bg-slate-950 px-12 md:px-16 lg:px-24 py-20">
        <p className="text-slate-200 text-md sm:text-lg md:text-xl lg:text-3xl font-bold whitespace-nowrap pb-8">
          Projects
        </p>
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projects?.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <Footer LinkedIn={LinkedIn} Github={Github} Gmail={Gmail} />
    </div>
  )
}
