"use client"
import { Link } from '@/app/components/link'
import { Project } from '@/app/types/projects'
import Image from 'next/image'
import { useState } from 'react'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showProjectDetails, setShowProjectDetails] = useState(false)

  return (
    <Link href={`/projects/${project.slug}`} className='w-full'>
    <div className='flex w-full relative gap-6 lg:gap-12 border-2 rounded-lg border-violet-400'>
      <div className='w-full h-full'>
        <Image
          width={750}
          height={404}
          src={project.pageThumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          className='w-full h-[13rem] lg:max-w-[750px] object-cover rounded-lg'
        />
      </div>
      <div onMouseEnter={() => setShowProjectDetails(true)} onMouseLeave={() => setShowProjectDetails(false)} className='slide-active-hover absolute'>
        <div className='h-full flex justify-center items-center cursor-pointer'>
          {showProjectDetails && (
            <div className='flex flex-col items-center' >
              <span className='text-xl xl:text-3xl uppercase text-center font-black font-mono'>{project.title}</span>
              <span className='text-xl font-mono'>{project.projectType}</span>
            </div>
          )}
        </div>
      </div>
    </div>
    </Link>
  )
}
