'use client';

import TechBadge from '@/app/components/design/TechBadge';
import SeeProjectButton from '@/app/components/design/SeeProjectButton';
import { Project } from '@/app/_types/project';
import { usePathname } from 'next/navigation';
import { BiCodeAlt } from 'react-icons/bi';
import { motion as m } from 'framer-motion';
import { PopDiv, PopSpan, popIn } from '@/app/lib/animations';

export interface Props {
    project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    const pathname = usePathname();

    return (
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-20">
            <PopDiv
                whileInView={popIn(0.1)}
                className="h-full w-full origin-left sm:w-fit"
            >
                <img
                    src={project.thumbnail.url}
                    className="h-[300px] w-full rounded-3xl object-cover sm:h-[350px] sm:w-[500px] md:h-[400px] md:min-w-[500px] lg:min-h-full"
                />
            </PopDiv>
            <div className="flex flex-col gap-10">
                <PopDiv
                    whileInView={popIn(0.3)}
                    className="flex origin-left items-center gap-3"
                >
                    <BiCodeAlt className="text-2xl text-pink-500" />
                    <span className="text-xl font-bold">{project.title}</span>
                </PopDiv>

                <PopSpan
                    whileInView={popIn(0.5)}
                    className="max-w-[600px] origin-left text-white/60"
                >
                    {project.shortDescription}
                </PopSpan>

                <PopDiv
                    whileInView={popIn(0.5)}
                    className="flex origin-left flex-col gap-4"
                >
                    <div className="flex w-fit flex-col gap-1 text-sm text-pink-400/80">
                        <span>Competências</span>
                        <div className="h-[2px] w-[30%] rounded-xl bg-pink-400/30" />
                    </div>
                    <div className="flex w-full flex-wrap gap-x-2 gap-y-3 lg:max-w-[80%]">
                        {project.technologies.map((tech, idx) => (
                            <PopDiv
                                key={'projects-' + tech + idx}
                                whileInView={popIn(0.7 + idx * 0.1)}
                            >
                                <TechBadge
                                    icon={tech.iconSvg}
                                    name={tech.name}
                                />
                            </PopDiv>
                        ))}
                    </div>
                </PopDiv>
                <PopDiv
                    className="origin-left"
                    whileInView={popIn(project.technologies.length * 0.1 + 0.9)}
                >
                    <SeeProjectButton
                        href={pathname + 'projects/' + project.slug}
                    />
                </PopDiv>
            </div>
        </div>
    );
};

export default ProjectCard;
