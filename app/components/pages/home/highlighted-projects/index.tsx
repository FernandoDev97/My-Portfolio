"use client"
import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Slider } from "./slider"
import { SwiperProps, SwiperSlide } from "swiper/react"
import useCheckMobileScreen from "@/app/hooks/useCheckMobileScreen"
import { Project } from "@/app/types/projects"
import { motion } from "framer-motion"

interface HighlightedProjectsProps {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  const isMobile = useCheckMobileScreen();
  const settings: SwiperProps = {
    spaceBetween: 35,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    slidesPerView: isMobile || projects.length <= 3 ? 1 : 3,
    loop: true,
    pagination: { clickable: true },
  }

  const animationProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0}, 
    exit: { opacity: 0, x: -100 },
}

  return (
    <section className="main-container py-16">
      <HorizontalDivider className="mb-16" />
      <SectionTitle subtitle="destaques" title="Projetos em destaque" className="pb-10" />
      <motion.div {...animationProps} transition={{duration: 0.5}}>
        <Slider projects={projects} settings={settings}>
          {projects?.map(project => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Slider>

        <p className="flex pt-4 md:pt-0 items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href='/projects' className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </motion.div>
    </section>
  )
}
