import { RichTextContent } from '@graphcms/rich-text-types';
import { KnownTech } from './page';

type ProjectSection = {
    title: string;
    description: {
        raw: RichTextContent;
    };
    image: {
        url: string;
    };
};

type ProjectClass = {
    title: string;
};

export type Project = {
    slug: string;
    title: string;
    shortDescription: string;
    description: {
        raw: RichTextContent;
    };
    githubUrl: string;
    liveProjectUrl: string;
    technologies: KnownTech[];
    thumbnail: {
        url: string;
    };
    sections: ProjectSection[];
    classes: ProjectClass[];
};

export type ProjectsPageData = {
    projects: Project[];
};

export type ProjectPageData = {
    project: Project;
};
