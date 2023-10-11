import AboutSection from './components/pages/home/about';
import HeroSection from './components/pages/home/hero';
import TechnologiesSection from './components/pages/home/technologies';
import HighlightsSection from './components/pages/home/highlights';
import DarkLayout from './components/design/DarkLayout';
import WorkTrajectorySection from './components/pages/home/work-trajectory';
import ContactSection from './components/pages/home/contact';
import FooterSection from './components/pages/home/footer';
import { fetchHygraphQuery } from './lib/fetchHygraphQuery';
import { HomePageData, HomePageInfo } from './_types/page';
import Head from 'next/head';
import Toaster from './components/design/Toaster';
import KnownTechnologiesSlider from './components/design/KnownTechnologiesSlider';

const getPageData = async () => {
    const query = `
    query GetPageData {
        page(where: { slug: "home" }) {
            slug
            socials {
                name
                url
                iconSvg
            }
            about {
                raw
            }
            carouselTechnologies {
                name
                iconSvg
            }
            introduction {
                raw
            }
            knownTechnologies {
                name
                startDate
                iconSvg
            }
            highlightProjects {
                slug
                thumbnail {
                    url
                }
                title
                shortDescription
                technologies {
                    name
                    iconSvg
                }
            }
        }

        workExperiences {
            title
            companyLogo {
                url
            }
            role
            companyName
            companyUrl
            startDate
            endDate
            description {
                raw
            }
            technologies {
                iconSvg
                name
            }
        }
    }`;

    const data = await fetchHygraphQuery<HomePageData>(query);

    return data;
};

export interface HomePageProps {
    pageData: HomePageInfo;
}

const Home = async () => {
    const { page: pageData, workExperiences: workExperiencesData } =
        await getPageData();

    return (
        <>
            <Head>
                <title>Gustavo Coelho - Portfólio</title>
                <meta
                    name="description"
                    content="Portfólio expositivo de Gustavo Coelho."
                />
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#060010]">
                <HeroSection heroInfo={pageData} />
                <KnownTechnologiesSlider
                    techs={pageData.carouselTechnologies}
                />
                <DarkLayout>
                    <AboutSection aboutInfo={pageData.about} />
                    <TechnologiesSection techs={pageData.knownTechnologies} />
                    <HighlightsSection projects={pageData.highlightProjects} />
                </DarkLayout>
                <WorkTrajectorySection experiences={workExperiencesData} />
                <ContactSection background="bg-[#27023f]" />
                <FooterSection />
                <Toaster />
            </div>
        </>
    );
};

export const metadata = {
    title: 'Home',
};

export default Home;
