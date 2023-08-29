'use client'
import Image from "next/image"
import { ProjectAside } from "./project-aside"
import { Project } from "@/app/types/projects"
import { motion } from "framer-motion"
interface ProjectSectionsProps {
  project: Project
}

const animationProps = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}

export const ProjectSections = ({ project }: ProjectSectionsProps) => {
  const { sections } = project

  return (
    <section className='main-container relative my-12 md:my-16 flex flex-col-reverse xl:flex-row gap-8 '>
      <div>
        <div className="flex flex-col gap-10 md:gap-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              {...animationProps}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              
              className="flex flex-col gap-4"
            >
              <div className="flex gap-2 items-center h-full">
                <div className="h-[30px] bg-violet-800 w-[6px]" />
                <h2 className="text-2xl md:text-3xl font-medium text-gray-300">{section.title}</h2>
              </div>
              <Image
                src={section.image.url}
                width={1080}
                height={672}
                className="aspect-auto rounded-lg object-cover"
                alt={`Imagem da sessão ${section.title}`}
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectAside project={project} />
    </section>
  )
}
