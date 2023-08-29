import React from 'react'
import { PageIntroduction } from '../components/pages/projects/page-intoduction';
import { ProjectsList } from '../components/pages/projects/projects-list';
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query';
import { ProjectsPageData } from '../types/page-info';
import { Metadata } from 'next';
import { SEO_PROJECTS } from '../utils/seo';

export const metadata: Metadata = {
  title: SEO_PROJECTS.title,
  description: SEO_PROJECTS.description,
  creator: 'Fernando Souza',
  publisher: 'Vercel',
  applicationName: 'Meu Portfólio | Fernando Souza',
  generator: SEO_PROJECTS.tags,
  openGraph: {
    images: [
      {
        url: SEO_PROJECTS.image,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    images: [
      {
        url: SEO_PROJECTS.image,
        width: 1200,
        height: 630.
      }
    ]
  }
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projectPage(where: {projectPage: "project-page"}) {
        description {
          raw
        }
      }
      projects(first: 30, orderBy: publishedAt_DESC) {
        id
        slug
        description {
          raw
        }
        shortDescription
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
  `

  return fetchHygraphQuery(query, 60 * 60 * 6)
}

const Projects = async () => {
  const { projects, projectPage } = await getPageData()
  return (
    <>
      <PageIntroduction introduction={projectPage} />
      <ProjectsList projects={projects} />
    </>
  )
}

export default Projects;