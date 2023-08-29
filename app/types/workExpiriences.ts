import { KnownTech } from "./projects";
import type { RichTextContent } from "@graphcms/rich-text-types";

export type WorkExpiriences = {
  id: string;
  companyName: string;
  companyUrl: string;
  description: {
    raw: RichTextContent;
  };
  companyLogo: {
    url: string;
  };
  role: string;
  startDate: string;
  endDate: string;
  technologies: KnownTech[];
};
