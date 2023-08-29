import { RichText } from "@/app/components/rich-text"
import { TechBadge } from "@/app/components/tech-badge"
import { Project } from "@/app/types/projects"
import Image from "next/image"

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const { description, title, technologies, thumbnail } = project

    return (
        <div className="rounded-lg group border-2 border-slate-800 opacity-70 hover:opacity-100 hover:border-violet-500 h-[520px] flex flex-col bg-slate-800 overflow-hidden transition-all">
            <div className="w-full h-[280px] overflow-hidden">
                <Image
                    className="group-hover:scale-110 object-cover w-full h-full duration-500 transition-all"
                    unoptimized
                    alt={`Image do projeto ${title}`}
                    width={380}
                    height={300}
                    src={thumbnail.url}
                />
            </div>
            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50 opacity-90 group-hover:text-violet-500 transition-all">
                    {title}
                </strong>
                <div className="my-2 text-gray-400 line-clamp-4">
                    <RichText content={description.raw} />
                </div>
                <span className="text-sm font-medium flex flex-wrap gap-2 mt-auto truncate">
                    {technologies.map((technologie, i) => (
                        <TechBadge
                            key={`technologie name project ${technologie.name}` + technologie.id}
                            name={technologie.name}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        />
                    ))}
                </span>
            </div>
        </div>
    )
}
