'use client'
import { motion } from "framer-motion"
import { ComponentProps } from "react"

type TechBadgeProps = ComponentProps<typeof motion.span> & {
    name: string
}

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span {...props} className="text-violet-400 cursor-default hover:bg-violet-500/70 bg-violet-900/80 text-sm py-1 px-3 rounded-lg">
        {name}
    </motion.span>
  )
}
