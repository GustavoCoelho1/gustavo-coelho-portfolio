import Head from 'next/head';
import { Project, ProjectsPageData } from '../_types/project';
import ContactSection from '../components/pages/home/contact';
import FooterSection from '../components/pages/home/footer';
import IntroductionSection from '../components/pages/projects/introduction';
import ProjectsListSection from '../components/pages/projects/projects-list';
import { fetchHygraphQuery } from '../lib/fetchHygraphQuery';
import Toaster from '../components/design/Toaster';

const getPageData = async () => {
    const query = `
        query GetProjectsData {
            projects {
                description {
                    raw
                }
                shortDescription
                slug
                title
                thumbnail {
                    url
                }
                technologies {
                    name
                    iconSvg
                }
                classes {
                    title
                }
            }
        }`;

    const data = await fetchHygraphQuery<ProjectsPageData>(query);

    return data;
};

const Projects = async () => {
    const { projects: projectsData } = await getPageData();
    return (
        <>
            <Head>
                <title>Gustavo Coelho - Projetos</title>
                <meta
                    name="description"
                    content="Portfólio expositivo de Gustavo Coelho."
                />
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>
            <div className="flex flex-col">
                <IntroductionSection />
                <ProjectsListSection projects={projectsData} />
                <ContactSection background="bg-[#060010]" />
                <FooterSection />
                <Toaster />
            </div>
        </>
    );
};

export const metadata = {
    title: 'Projetos',
};

export default Projects;
