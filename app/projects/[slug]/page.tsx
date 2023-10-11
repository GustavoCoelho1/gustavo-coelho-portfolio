import { ProjectsPageStaticData } from '@/app/_types/page';
import { ProjectPageData } from '@/app/_types/project';
import Toaster from '@/app/components/design/Toaster';
import ContactSection from '@/app/components/pages/home/contact';
import FooterSection from '@/app/components/pages/home/footer';
import ProjectDetails from '@/app/components/pages/projects/project-details';
import { fetchHygraphQuery } from '@/app/lib/fetchHygraphQuery';
import { Metadata } from 'next';
import Head from 'next/head';

const getProjectData = async (slug: string) => {
    const query = `
        query GetProjectData {
            project(where: { slug: "${slug}"}) {
                title
                slug
                description {
                    raw
                }
                thumbnail {
                    url
                }
                technologies {
                    name
                    iconSvg
                }
                githubUrl
                liveProjectUrl
                sections {
                    title
                    description {
                        raw
                    }
                    image {
                        url
                    }
                }
            }
        }`;

    const data = await fetchHygraphQuery<ProjectPageData>(query);

    return data;
};

export const generateStaticParams = async () => {
    const query = `
        query {
            projects(first: 100) {
                slug
            }
        }
    `;

    const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query);

    return projects;
};

interface Props {
    params: {
        slug: string;
    };
}

const Project = async ({ params: { slug } }: Props) => {
    const { project } = await getProjectData(slug);

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
            <section>
                <ProjectDetails project={project} />
                <ContactSection background="bg-[#060010]" />
                <FooterSection />
                <Toaster />
            </section>
        </>
    );
};

export const generateMetadata = async ({
    params: { slug },
}: Props): Promise<Metadata> => {
    const { project } = await getProjectData(slug);

    return {
        title: project.title,
        description: project.shortDescription,
        openGraph: {
            images: [
                {
                    url: project.thumbnail.url,
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
};

export default Project;
