'use client';

import { Project } from '@/app/_types/project';
import TechBadge from '@/app/components/design/TechBadge';
import { CMSRichText } from '@/app/lib/utils';
import { Variants, motion as m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface Props {
    project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    const pathname = usePathname();
    const [isHover, setIsHover] = useState(false);

    const variants = {
        animate: {
            opacity: 1,
            transition: { duration: 0.3 },
        },

        idle: {
            opacity: 0,
            transition: { duration: 0.3 },
        },
    } as Variants;

    return (
        <m.a
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            href={pathname + '/' + project.slug}
            className={`relative flex h-full w-full max-w-[360px] cursor-pointer flex-col gap-2 rounded-2xl border bg-[#060010] shadow-lg shadow-black/50 transition duration-300 ease-in ${
                isHover ? 'border-pink-500' : 'border-[#201138]'
            }`}
        >
            <div className="relative flex h-[200px] w-full items-center overflow-hidden rounded-t-2xl pb-10">
                <img
                    src={project.thumbnail.url}
                    className={`w-full bg-cover transition duration-300 ${
                        isHover ? 'scale-105' : 'scale-100'
                    }`}
                    alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#060010] to-transparent" />
            </div>
            <div className="flex w-full flex-col gap-8 p-8 pt-5">
                <div className="flex flex-col gap-1">
                    <span className={`} w-fit text-2xl font-bold`}>
                        {project.title}
                    </span>

                    <span className="text-sm text-pink-300">
                        {project.classes.map((item, idx) =>
                            project.classes.length > 1
                                ? idx == 0
                                    ? item.title + ' ' + '|'
                                    : idx == project.classes.length - 1
                                    ? ' ' + item.title
                                    : ' ' + item.title + ' ' + '|'
                                : item.title,
                        )}
                    </span>
                </div>

                <span className="text-white/70">
                    {project.shortDescription}
                </span>

                <div className="flex w-full flex-wrap gap-x-2 gap-y-3 lg:max-w-[100%]">
                    {project.technologies.map((tech, idx) => {
                        if (idx <= 5) {
                            return (
                                <TechBadge
                                    key={`projects-${tech.name}`}
                                    icon={tech.iconSvg}
                                    name={tech.name}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </m.a>
    );
};

export default ProjectCard;
