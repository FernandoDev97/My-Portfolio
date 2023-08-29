import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";
import { HomePageData } from "./types/page-info";
import { SEO_HOME } from "./utils/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SEO_HOME.title,
  description: SEO_HOME.description,
  creator: 'Fernando Souza',
  publisher: 'Vercel',
  applicationName: 'Meu Portfólio | Fernando Souza',
  generator: SEO_HOME.tags,
  openGraph: {
    images: [
      {
        url: SEO_HOME.image,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    images: [
      {
        url: SEO_HOME.image,
        width: 1200,
        height: 630.
      }
    ]
  }
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        socials {
          url
          iconSvg
        }
        knownTechs(first: 30) {
          name
          id
          iconSvg
          startDate
        }
        highlightProjects(first: 30) {
          id
          slug
          projectType
          title
          shortDescription
          description {
            raw
          }
          pageThumbnail {
            url
          }
          thumbnail {
            url
          }
          technologies {
            name
          }
          sections {
            title
            image {
              url
            }
          }
          liveProjectUrl
          githubUrl
        }
      }
      workExpiriences {
        id
        companyName
        companyUrl
        description {
          raw
        }
        companyLogo {
          url
        }
        role
        startDate
        endDate
        technologies {
          name
        }
      }
    }
  `
  return fetchHygraphQuery(query, 60 * 60 * 6)
}

export default async function Home() {
  const { page: pageData, workExpiriences } = await getPageData()
  const { knownTechs, highlightProjects } = pageData
  
  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs knownTechsInfo={knownTechs} />
      <HighlightedProjects projects={highlightProjects} />
      <WorkExperience experiencies={workExpiriences} />
    </>
  )
}
