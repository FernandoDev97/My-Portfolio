'use client'
import { cn } from '@/app/lib/utlis'
import { motion } from 'framer-motion'
interface HorizontalDividerProps {
    className?: string
}

const animationProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 }, 
  exit: { opacity: 0 },
}

export const HorizontalDivider = ({className}: HorizontalDividerProps) => {
  return (
    <motion.div {...animationProps} transition={{duration: 0.5}} className={cn('w-full my-8 border-b border-b-gray-700', className)}>

    </motion.div>
  )
}
