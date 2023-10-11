'use client';

import { Project } from '@/app/_types/project';
import TechBadge from '@/app/components/design/TechBadge';
import { CMSRichText } from '@/app/lib/utils';
import { CSSProperties } from 'react';
import { TbBrandGithub, TbExternalLink } from 'react-icons/tb';
import SmoothDivider from '../../home/highlights/SmoothDivider';
import {
    FadeDiv,
    FadeSpan,
    PopDiv,
    PopSpan,
    fadeIn,
    popIn,
} from '@/app/lib/animations';

const styles = {
    projects: {
        backgroundImage:
            'linear-gradient(360deg, rgb(6,0,16) 0%,transparent 59%),repeating-linear-gradient(315deg, rgba(93,67,116, 0.1) 0px, rgba(93,67,116, 0.1) 1px,transparent 1px, transparent 13px),repeating-linear-gradient(405deg, rgba(93,67,116, 0.1) 0px, rgba(93,67,116, 0.1) 1px,transparent 1px, transparent 13px),linear-gradient(360deg, rgb(6,0,16),rgb(6,0,16))',
    } as CSSProperties,
};

interface Props {
    project: Project;
}

const ProjectDetails: React.FC<Props> = ({ project }) => {
    return (
        <section
            style={{ backgroundImage: styles.projects.backgroundImage }}
            className="flex w-full bg-[#060010]"
        >
            <div className="container flex flex-col items-center justify-center gap-10">
                <div className=" flex flex-col items-center gap-10 pt-28">
                    <div className="flex flex-col items-center gap-3">
                        <FadeSpan
                            whileInView={fadeIn(0.1)}
                            className="font-mono text-pink-600"
                        >
                            ../{project.slug}
                        </FadeSpan>
                        <FadeSpan
                            whileInView={fadeIn(0.3)}
                            style={{ textShadow: '0 0 20px white' }}
                            className="text-4xl font-bold"
                        >
                            {project.title}
                        </FadeSpan>
                    </div>

                    <div className="flex max-w-[500px] flex-wrap gap-x-3 gap-y-2">
                        {project.technologies.map((tech, idx) => (
                            <PopDiv
                                whileInView={popIn(0.1 * idx)}
                                key={`project-${tech.name}`}
                            >
                                <TechBadge
                                    icon={tech.iconSvg}
                                    name={tech.name}
                                />
                            </PopDiv>
                        ))}
                    </div>
                </div>

                <FadeDiv
                    whileInView={fadeIn(0.5)}
                    className="rounded-2xl border border-[#201138] bg-[#060010] px-10 py-8 text-white/70 shadow-lg shadow-black/50 sm:mx-20 sm:px-12 sm:py-10 "
                >
                    <PopSpan className="origin-left" whileInView={popIn(0.7)}>
                        <CMSRichText content={project.description.raw} />
                    </PopSpan>
                </FadeDiv>
                <div className="flex flex-col justify-center gap-4 sm:w-fit sm:max-w-[400px] sm:flex-row sm:gap-8">
                    <PopSpan whileInView={popIn(0.7)}>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-tr from-pink-600 to-pink-500 px-8 py-4 font-bold shadow-md shadow-black/70  transition duration-300 hover:scale-105 sm:w-fit sm:min-w-[190px]"
                        >
                            <TbBrandGithub className="text-2xl" />
                            Repositório
                        </a>
                    </PopSpan>
                    <PopSpan whileInView={popIn(0.7)}>
                        <a
                            href={project.liveProjectUrl}
                            target="_blank"
                            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-tr from-pink-600 to-pink-500 px-8 py-4 font-bold shadow-md shadow-black/70 transition duration-300 hover:scale-105 sm:w-fit sm:min-w-[190px]"
                        >
                            <TbExternalLink className="text-2xl" />
                            Ver site
                        </a>
                    </PopSpan>
                </div>

                <SmoothDivider margin="my-8 sm:my-10" />

                <PopSpan
                    whileInView={popIn(0.9)}
                    className="text-3xl font-bold"
                >
                    Sessões
                </PopSpan>
                <div className="flex w-full flex-col gap-10 sm:w-[80%]">
                    {project.sections.map((section, idx) => (
                        <FadeDiv
                            whileInView={fadeIn(0.1 * idx)}
                            className="flex flex-col gap-10 rounded-2xl border border-[#201138] bg-[#060010] p-6 shadow-lg shadow-black/50 sm:gap-20 sm:p-10 md:flex-row"
                        >
                            <img
                                src={section.image.url}
                                alt=""
                                className={`h-full max-h-[280px] min-w-[240px] rounded-2xl object-cover sm:min-w-[300px] ${
                                    idx % 2 == 0 ? 'sm:order-1' : 'sm:order-2'
                                }`}
                            />
                            <div
                                className={`flex flex-col gap-10 ${
                                    idx % 2 == 0 ? 'sm:order-2' : 'sm:order-1'
                                }`}
                            >
                                <PopSpan
                                    whileInView={popIn(0.1 * idx + 0.2)}
                                    className="text-xl font-bold"
                                >
                                    {idx + 1 + '. ' + section.title}
                                </PopSpan>
                                <PopSpan
                                    className="text-white/70"
                                    whileInView={popIn(0.1 * idx + 0.4)}
                                >
                                    <CMSRichText
                                        content={section.description.raw}
                                    />
                                </PopSpan>
                            </div>
                        </FadeDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
