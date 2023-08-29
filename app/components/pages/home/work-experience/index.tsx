'use client'

import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"
import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { WorkExpiriences } from "@/app/types/workExpiriences"
import { motion } from 'framer-motion'

interface WorkExperienceProps {
  experiencies: WorkExpiriences[]
}

const animationProps = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0}, 
  exit: { opacity: 0, x: -100 },
}

export const WorkExperience = ({ experiencies }: WorkExperienceProps) => {
  return (
    <section className="main-container pb-16 flex flex-col">
      <HorizontalDivider className="mb-16" />
      <div className="flex flex-col gap-10 md:gap-6">
        <div className="w-full">
          <SectionTitle subtitle="experiências" title="Experiências Profissional" />
        </div>
        <div className="flex flex-col-reverse gap-4">
          {experiencies.map(experiencie => (
            <motion.div key={experiencie.id} {...animationProps} transition={{duration: 0.5}}>
              <ExperienceItem experiencie={experiencie} />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
