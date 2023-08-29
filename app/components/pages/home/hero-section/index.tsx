'use client'
import { Button } from "@/app/components/button"
import { RichText } from "@/app/components/rich-text"
import { TechBadge } from "@/app/components/tech-badge"
import { HomePageInfo } from "@/app/types/page-info"
import { HiArrowNarrowDown } from 'react-icons/hi'
import { motion } from "framer-motion"

interface HeroSectionProps {
    homeInfo: HomePageInfo
}

const animationProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
    const handleContact = () => {
        const contactSection = document.querySelector('#contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className='flex flex-col justify-start pb-10 pt-40 md:pt-20 lg:pb-0'>
            <div className='main-container flex items-start justify-between flex-col-reverse'>
                <motion.div 
                    transition={{duration: 0.5}} 
                    {...animationProps}
                    className="w-full" 
                >
                    <h1 className="font-mono text-violet-400">Olá, meu nome é</h1>
                    <motion.h2 {...animationProps} transition={{duration: 0.5, delay: 0.2}} className="text-5xl font-medium mt-2">Fernando Souza</motion.h2>
                    <div className="text-gray-400 my-6 text-sm md:text-2xl">
                        <RichText content={homeInfo.introduction.raw} />
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[1024px]">
                        {homeInfo.technologies.map((tech, i) => (
                            <TechBadge 
                                key={`${tech.name} + hero section`} 
                                name={tech.name} 
                                initial={{opacity: 0, scale: 0}}
                                whileInView={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0}}
                                transition={{duration: 0.5, delay: i * 0.1}}
                            />
                        ))}
                    </div>
                    <div className="flex sm:items-center mt-6 lg:mt-10 sm:gap-5 flex-col sm:flex-row">
                        <Button onClick={handleContact} className=" w-max">
                            Entre em Contato
                            <HiArrowNarrowDown size={18} />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
