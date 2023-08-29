'use client'
import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { CMSIcon } from "@/app/components/cms-icon"
import { KnownTech as KnowTechProps } from "@/app/types/projects"
import { motion } from 'framer-motion'

interface KnownTechsProps {
    knownTechsInfo: KnowTechProps[]
}

const animationProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0}, 
    exit: { opacity: 0, x: -100 },
}

export const KnownTechs = ({ knownTechsInfo }: KnownTechsProps) => {
    return (
        <section className="main-container pt-0 lg:pt-16">
            <HorizontalDivider className="mb-16" />
            <SectionTitle subtitle="competências" title="Conhecimentos" />
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-[60px]">
                {knownTechsInfo.map(knownTech => (
                    <motion.div
                        {...animationProps}
                        key={`${knownTech.id} + know techs home`}
                        transition={{duration: 0.5}} 
                    >
                        <KnownTech
                            tech={{
                                icon: <CMSIcon className="[&>svg]:text-[3.3rem] md:[&>svg]:text-[6rem]" icon={knownTech.iconSvg} />,
                                name: knownTech.name,
                                startDate: knownTech.startDate
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
