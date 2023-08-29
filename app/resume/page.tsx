import React from 'react'
import ResumePdf  from '../components/pages/resume/resume-pdf';
import { Metadata } from 'next';
import { SEO_RESUME } from '../utils/seo';

export const metadata: Metadata = {
  title: SEO_RESUME.title,
  description: SEO_RESUME.description,
  creator: 'Fernando Souza',
  publisher: 'Vercel',
  applicationName: 'Meu Portfólio | Fernando Souza',
  generator: SEO_RESUME.tags,
  openGraph: {
    images: [
      {
        url: SEO_RESUME.image,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    images: [
      {
        url: SEO_RESUME.image,
        width: 1200,
        height: 630.
      }
    ]
  }
}

const Resume = () => {
  return (
    <>
      <ResumePdf/>
    </>
  )
}

export default Resume;