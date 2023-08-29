'use client'
import { SectionTitle } from "../../section-title"
import { Link } from "../../link"
import { HiArrowNarrowLeft } from "react-icons/hi"
import type { RichTextContent } from "@graphcms/rich-text-types";
import { RichText } from "../../rich-text"
import { motion } from "framer-motion";

interface ProjectDetailsProps {
    thumb: {
        url: string
    }
    description: {
        raw: RichTextContent
    }
    title: string
}

const animationProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

export const ProjectDetails = ({ thumb, description, title }: ProjectDetailsProps) => {

    return (
        <motion.section {...animationProps} transition={{ duration: 0.5 }} className="main-container sm:min-h-[500px] relative pb-10 pt-40 md:pt-20 overflow-hidden flex flex-col">
            <div
                style={{
                    background: `url(${thumb.url}) no-repeat center/cover`
                }}
                className="absolute mt-0 lg:mt-6 mr-0 lg:mr-6 opacity-40 rounded-lg inset-0 z-[-1]"
            />
            <div className="w-full">
                <motion.p {...animationProps} transition={{ duration: 0.5 }} className="font-mono text-violet-400">../projeto</motion.p>
                <motion.h1 {...animationProps} transition={{ duration: 0.4, delay: 0.2 }} className="text-4xl font-medium mt-2">{title}</motion.h1>
            </div>
            <div className="text-gray-300 my-4 sm:my-6 text-sm md:text-2xl">
                <RichText content={description.raw} />
            </div>
            <Link href='/projects' className="pt-4">
                <HiArrowNarrowLeft size={20} />
                Voltar para projetos
            </Link>
        </motion.section>
    )
}
