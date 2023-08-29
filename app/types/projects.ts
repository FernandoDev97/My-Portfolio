import type { RichTextContent } from "@graphcms/rich-text-types";

export type KnownTech = {
  id: string;
  iconSvg: string;
  name: string;
  startDate: string;
};

export type ProjectSections = {
  title: string;
  image: {
    url: string;
  };
};

export type ProjectPage = {
  description: {
    raw: RichTextContent;
  };
};

export type Project = {
  id: string;
  slug: string;
  projectType: string;
  title: string;
  shortDescription: string;
  description: {
    raw: RichTextContent;
    text: string
  };
  participation: {
    raw: RichTextContent;
  };
  thumbnail: {
    url: string;
  };
  technologies: KnownTech[];
  pageThumbnail: {
    url: string;
  };
  sections: ProjectSections[];
  liveProjectUrl?: string;
  githubUrl?: string;
};
