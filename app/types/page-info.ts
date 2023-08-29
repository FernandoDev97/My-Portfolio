import { KnownTech, Project, ProjectPage } from "./projects";
import type { RichTextContent } from "@graphcms/rich-text-types";
import { WorkExpiriences } from "./workExpiriences";

export type Socials = {
  id: string;
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnownTech[];
  socials: Socials[];
  knownTechs: KnownTech[];
  highlightProjects: Project[]
};

export type HomePageData = {
  page: HomePageInfo;
  workExpiriences: WorkExpiriences[];
};

export type ProjectDetailsData = {
  project: Project
}

export type ProjectsPageData = {
  projectPage: ProjectPage;
  projects: Project[]
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string 
  }[]
}