'use client'
import Link from "next/link"
import { ProjectCard } from "./project-card"
import { Project } from "@/app/types/projects"
import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { motion } from "framer-motion"
interface ProjectsListProps {
  projects: Project[]
}

const animationProps = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className='main-container'>
      <HorizontalDivider className="my-16"/>
      <motion.div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(550px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project, i) => (
        <Link key={project.id} href={`/projects/${project.slug}`}>
          <motion.div {...animationProps} transition={{duration: 0.5, delay: i * 0.1}}>
            <ProjectCard project={project} />
          </motion.div>
        </Link>
      ))}
      </motion.div>
    </section>
  )
}
