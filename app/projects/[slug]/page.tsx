import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections'
import { ProjectDetailsData, ProjectsPageStaticData } from '@/app/types/page-info'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'
import { SEO_PROJECTS } from '@/app/utils/seo'
import { Metadata } from 'next'

interface ProjectProps {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectDetailsData> => {
  const query = `
    query ProjectQuery() {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
        participation {
          raw
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
  `
  return fetchHygraphQuery(query, 60 * 60 * 6)
}

const Project = async ({params: { slug }}: ProjectProps) => {
  const { project } = await getProjectDetails(slug)
  const { thumbnail, description, title } = project
  return (
    <>
      <ProjectDetails thumb={thumbnail} title={title} description={description} />
      <ProjectSections project={project} />
    </>
  )
}

export default Project

export async function generateStaticParams() {
  const query =  `
    query ProjectSlugQuery() {
      projects(first: 15) {
        slug
      }
    }
  `

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)
  return projects
}

export async function generateMetadata({ params: {slug} }: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug)
  const project = data.project

  return {
    title: project.title,
    description: project.description.text,
    generator: SEO_PROJECTS.tags,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        }
      ]
    },
    twitter: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630
        }
      ]
    },
  }
}