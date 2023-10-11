import { RichTextContent } from '@graphcms/rich-text-types';
import { KnownTech } from './page';

export type WorkExperience = {
    title: string;
    companyLogo: {
        url: string;
    };
    role: string;
    companyName: string;
    companyUrl: string;
    startDate: string;
    endDate: string;
    description: {
        raw: RichTextContent;
    };
    technologies: KnownTech[];
};
