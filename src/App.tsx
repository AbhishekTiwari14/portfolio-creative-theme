import CreativeTheme from "./components/Creative Theme/CreativeTheme"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState({
    palette: "p1",
    fullName: "",
    title: "Ye Title Hai",
    description: "Description likhlo lambi chaudi",
    about:
      "I'm a developer who creates accessible, pixel-perfect user interfaces combining thoughtful design with solid engineering. My passion lies where design meets development—building experiences that are visually appealing while optimized for performance and usability. I'm dedicated to crafting interfaces that not only look great but function flawlessly, bridging the gap between aesthetics and technical excellence while prioritizing accessibility throughout the development process. <br /><br /> Currently serving as a Senior Front-End Engineer at Klaviyo with a focus on accessibility, I help develop and maintain UI components powering the platform's frontend. My work ensures our product adheres to web accessibility standards and best practices, creating an inclusive experience for all users. </p>",
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
  useEffect(() => {
    if (data.fullName) {
      document.title = data.fullName
    }
  }, [data.fullName])

  return <CreativeTheme />
}

export default App
