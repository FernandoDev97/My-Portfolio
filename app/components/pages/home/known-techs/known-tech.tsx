'use client'
import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { ReactNode, useState } from "react"

interface KnownTechProps {
    tech: {
        icon: ReactNode
        name: string
        startDate: string
    }
}

export const KnownTech = ({ tech }: KnownTechProps) => {
    const [showProjectDetails, setShowProjectDetails] = useState(false)
    const relativeTime = getRelativeTimeString(
        new Date(tech.startDate), 'pt-BR'
    ).replace('há', '')

    return (
        <div className="py-8 px-5 relative rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 transition-all duration-500 hover:bg-violet-950/40">
            <div className="flex items-center justify-center text-lg transition-all duration-500 text-gray-200 hover:text-gray-600">
                {tech.icon}
                <div onMouseEnter={() => setShowProjectDetails(true)} onMouseLeave={() => setShowProjectDetails(false)} className='w-full h-full absolute'>
                    <div className='h-full flex justify-center items-center transition-all duration-700 ease-in-out cursor-default'>
                        {showProjectDetails && (
                            <div className='flex flex-col items-center'>
                                <span className='text-base xl:text-2xl uppercase font-black font-mono text-center text-gray-100'>{tech.name}</span>
                                <span className='text-sm xl:text-lg  font-mono text-center text-gray-200 font-light'>{relativeTime} de experiência</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}