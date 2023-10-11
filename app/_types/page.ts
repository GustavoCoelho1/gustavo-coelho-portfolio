import type { RichTextContent } from '@graphcms/rich-text-types';
import { Project } from './project';
import { WorkExperience } from './workTrajectory';

export type Social = {
    name: string;
    url: string;
    iconSvg: string;
};

export type CarouselTech = {
    name: string;
    iconSvg: string;
};

export type KnownTech = {
    name: string;
    startDate: string;
    iconSvg: string;
};

export type HomePageInfo = {
    introduction: {
        raw: RichTextContent;
    };
    about: {
        raw: RichTextContent;
    };
    slug: string;
    socials: Social[];
    carouselTechnologies: CarouselTech[];
    knownTechnologies: KnownTech[];
    highlightProjects: Project[];
};

export type HomePageData = {
    page: HomePageInfo;
    workExperiences: WorkExperience[];
};

export type ProjectsPageStaticData = {
    projects: [{ slug: string }];
};
