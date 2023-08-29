'use client'
import { TbBrandFacebook, TbBrandGithub, TbBrandLinkedin, TbBrandTwitter, TbBrandWhatsapp } from "react-icons/tb"
import { Button } from "../../button"
import { HorizontalDivider } from "../../divider/horizontal"
import { TechBadge } from "../../tech-badge"
import { FiGlobe } from "react-icons/fi"
import { Project } from "@/app/types/projects"
import { RichText } from "@graphcms/rich-text-react-renderer"
import { ReactNode, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SocialShareProvider {
    shareUrl: string;
    icon: ReactNode;
}

interface ProjectAsideProps {
    project: Project
}

const animationProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

export const ProjectAside = ({ project }: ProjectAsideProps) => {
    const { technologies, githubUrl, liveProjectUrl, participation } = project
    const [ currentUrl, setCurrentUrl ] = useState<string>('')
    
    useEffect(() => {
        const url = typeof window !== 'undefined' ? window.location.href : '';
        setCurrentUrl(url)
    }, [])

    const socialShare: Record<string, SocialShareProvider> = {
        twitter: {
            shareUrl: `https://twitter.com/intent/tweet?url=${currentUrl}`,
            icon: <TbBrandTwitter size={24} />
        },
        linkedin: {
            shareUrl: `http://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`,
            icon: <TbBrandLinkedin size={24} />
        },
        facebook: {
            shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
            icon: <TbBrandFacebook size={24} />
        },
        whatsapp: {
            shareUrl: `https://wa.me/?text=${currentUrl}`,
            icon: <TbBrandWhatsapp size={24} />
        },
    }
   
    return (
        <motion.aside
            {...animationProps}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 p-8 flex flex-col gap-6 w-full xl:max-w-[730px] lg:ml-auto rounded-lg h-fit static xl:sticky top-8"
        >
            <div className="flex flex-col gap-3">
                <span className="font-sans uppercase text-xl font-bold">
                    Tecnologias ultilzadas:
                </span>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((technologie, i) => (
                        <TechBadge
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            key={`${technologie.name} + tech aside projects`}
                            name={technologie.name}
                        />
                    ))}

                </div>
            </div>
            <HorizontalDivider className="my-0" />
            <div className="flex flex-col gap-3">
                <span className="font-sans flex flex-1 uppercase text-xl font-bold">
                    Minha função/participação:
                </span>
                <span className="text-base font-sans">
                    <RichText content={participation.raw} />
                </span>
            </div>

            <HorizontalDivider className="my-0" />

            <div className="flex flex-col 2xl:flex-row gap-6 items-center w-full justify-between">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    {githubUrl && (
                        <a href={githubUrl} target="_blank">
                            <Button className="">
                                <TbBrandGithub size={20} />
                                Repositório
                            </Button>
                        </a>
                    )}
                    {liveProjectUrl && (
                        <a href={liveProjectUrl} target="_blank">
                            <Button className="">
                                <FiGlobe size={20} />
                                Projeto Online
                            </Button>
                        </a>
                    )}
                </div>
                <div className="flex w-auto flex-col gap-2">
                    <span className="text-sm">
                        Compartilhe este projeto
                    </span>
                    <div className="text-xl mx-auto lg:ml-auto text-gray-400 flex gap-3">
                        {Object.entries(socialShare).map(([itemKey, socialShareProvider], i) => (
                            <motion.a
                                href={socialShareProvider.shareUrl}
                                key={itemKey}
                                target="_blank"
                                className="hover:text-violet-500 transition-colors"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                {socialShareProvider.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.aside>
    )
}
