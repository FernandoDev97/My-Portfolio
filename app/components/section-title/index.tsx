'use client'

import { cn } from "@/app/lib/utlis"
import { motion } from 'framer-motion' 
interface SectionTitleProps {
    title: string
    subtitle: string
    className?: string
}

const animationProps = {
  initial: { opacity: 0, x: -100},
  whileInView: { opacity: 1, x: 0}, 
  exit: {opacity: 0, x: -100}, 
}

export const SectionTitle = ({title, subtitle, className}: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
        <motion.span {...animationProps} transition={{duration: 0.5}} className="text-base font-mono text-violet-400">
            {`../${subtitle}`}
        </motion.span>
        <motion.h3 {...animationProps} transition={{duration: 0.5, delay: 0.2}} className="text-4xl font-medium">
            {title}
        </motion.h3>
    </div>
  )
}
