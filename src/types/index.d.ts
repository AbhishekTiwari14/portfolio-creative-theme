export type Data = {
  palette: Palette
  fullName: string
  title: string
  description: string
  about: string
  Github: string
  LinkedIn: string
  Gmail: string
  experiences: Experience[]
  projects: Project[]
}

export type Palette = "p1" | "p2" | "p3" | "p4" | "p5"

type Experience = {
  fromYear: string
  toYear: string
  designation: string
  company: string
  workSummary: string
  technologies: string[]
}

type Project = {
  title: string
  description: string
  keyFeatures: string[]
  codeLink: string
  demoLink: string
  technologies: string[]
}
