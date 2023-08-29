'use client'
import { Link } from '@/app/components/link'
import { RichText } from '@/app/components/rich-text'
import { ProjectPage } from '@/app/types/projects'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from 'framer-motion'

interface PageIntroductionProps {
  introduction: ProjectPage
}

const animationProps = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}

export const PageIntroduction = ({ introduction }: PageIntroductionProps) => {
  return (
    <section className='flex flex-col justify-start pt-40 md:pt-20'>
      <motion.div
        transition={{ duration: 0.5 }}
        {...animationProps}
        className='main-container flex items-start justify-between flex-col'
      >
        <div className="w-full">
          <h1 className="font-mono text-violet-400">../projetos</h1>
          <motion.h2 {...animationProps} transition={{duration: 0.4, delay: 0.2}} className="text-4xl font-medium mt-2">Meus projetos</motion.h2>
          <div className="text-gray-400 my-6 text-sm md:text-2xl">
            <RichText content={introduction.description.raw} />
          </div>
        </div>
        <Link href='/'>
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  )
}
