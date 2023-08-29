import { RichText } from "@/app/components/rich-text"
import { TechBadge } from "@/app/components/tech-badge"
import { WorkExpiriences } from "@/app/types/workExpiriences"
import { differenceInMonths, differenceInYears, format } from "date-fns"
import { ptBR } from "date-fns/locale"
import Image from "next/image"

interface ExperienceItemProps {
    experiencie: WorkExpiriences
}

export const ExperienceItem = ({ experiencie }: ExperienceItemProps) => {

    const startDate = new Date(experiencie.startDate)
    const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })

    const formattedEndDate = experiencie.endDate ? format(new Date(experiencie.endDate), 'MMM yyyy', { locale: ptBR }) : 'até o momento'

    const end = experiencie.endDate ? new Date(experiencie.endDate) : new Date()
    const months = differenceInMonths(end, startDate)
    const years = differenceInYears(end, startDate)
    const monthsRemaining = months % 12

    const formattedDuration =
        years > 0
            ? `${years} ano${years > 1 ? 's' : ''}${monthsRemaining > 0
                ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
                : ''
            }`
            : `${months} mes${months > 1 ? 'es' : ''}`

    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full w-10 h-10 border border-gray-500 p-0.5">
                    <Image
                        src={experiencie.companyLogo.url}
                        width={40}
                        height={40}
                        alt={`Logo da empresa ${experiencie.companyName}`}
                        className="rounded-full"
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-700" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href={experiencie.companyUrl} target="_blank" className="text-gray-200 underline italic w-max hover:text-violet-500 transition-colors">
                        @ {experiencie.companyName}
                    </a>
                    <h4 className="text-gray-400 text-lg ">
                        {experiencie.role}
                    </h4>
                    <span className="text-gray-200">
                        {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
                    </span>
                    <div className="text-gray-400">
                        <RichText
                            content={experiencie.description.raw}
                        />
                    </div>
                </div>

                <p className="text-gray-400 text-sm lg:text-base mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap w-full mb-8">
                    {experiencie.technologies.map((technologie, i) => (
                        <TechBadge
                            key={`${technologie.name} + experiencie item home`}
                            name={technologie.name}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
