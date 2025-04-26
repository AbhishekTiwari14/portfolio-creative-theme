import { motion, useAnimation } from "framer-motion"
import { lazy, Suspense, useEffect, useRef } from "react"
import { BackgroundStars } from "../BackgroundStars"

const InteractiveGlobe = lazy(() => import("./InteractiveGlobe"))

export default function AboutSection({ about }: { about: string }) {
  const controls = useAnimation()
  const sectionRef = useRef(null)

  const lineVariants = {
    hidden: { scaleX: 0 },
    animate: {
      scaleX: [0, 1, 0],
      transition: {
        duration: 2, // Total duration for all steps
        times: [0, 0.5, 1], // Evenly distribute the timing for each step
        ease: "easeInOut",
      },
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the section enters the viewport
          if (entry.isIntersecting) {
            // Play the animation
            controls.start("animate")
          } else {
            // Reset the animation when out of view
            controls.start("hidden")
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [controls])

  return (
    <div
      ref={sectionRef}
      className="bg-[#020b18] min-h-fit w-full pt-12 relative overflow-hidden pb-8 px-3 sm:px-6 md:px-12 lg:px-24"
    >
      <BackgroundStars />

      <div className="lg:relative z-10">
        <div className="w-full lg:w-1/2 flex items-center gap-4 mt-4 pb-2 sm:pb-3 md:pb-5 lg:pb-6">
          <p className="text-slate-200 text-md sm:text-lg md:text-xl lg:text-3xl font-bold whitespace-nowrap">
            About Me
          </p>
          <motion.span
            className="self-center h-px flex-grow bg-white origin-left"
            variants={lineVariants}
            initial="hidden"
            animate={controls}
          />
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 place-items-center">
          <div
            className="text-white font-semibold"
            dangerouslySetInnerHTML={{ __html: about }}
          />
          <div className="hidden lg:block h-full w-full mt-8 lg:mt-0">
            <Suspense
              fallback={
                <img
                  src="/globe.PNG"
                  alt="globe"
                  className="w-[500px] ml-16 mb-8"
                />
              }
            >
              <InteractiveGlobe />
            </Suspense>
          </div>
        </div>
        <div className="block lg:hidden p-1 overflow-none">
          <div
            className="text-white font-semibold tracking-wider"
            dangerouslySetInnerHTML={{ __html: about }}
          />
        </div>
      </div>
    </div>
  )
}
