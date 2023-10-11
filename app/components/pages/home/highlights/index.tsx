'use client';

import { IoMdArrowRoundForward } from 'react-icons/io';
import ProjectCard from './ProjectCard';
import SmoothDivider from './SmoothDivider';
import Link from 'next/link';
import { Project } from '@/app/_types/project';
import {
    FadeDiv,
    FadeSpan,
    PopDiv,
    PopSpan,
    fadeIn,
    popIn,
} from '@/app/lib/animations';

interface Props {
    projects: Project[];
}

const HighlightsSection: React.FC<Props> = ({ projects }) => {
    return (
        <section className="flex w-full flex-col">
            <FadeSpan whileInView={fadeIn(0.1)} className="mb-2 text-white/80">
                projetos
            </FadeSpan>
            <FadeSpan
                whileInView={fadeIn(0.3)}
                style={{ textShadow: '0 0 20px white' }}
                className="text-3xl font-bold"
            >
                Em destaque
            </FadeSpan>
            <PopDiv
                className="flex w-full origin-left"
                whileInView={popIn(0.5)}
            >
                <SmoothDivider margin="mt-6 mb-10 sm:mb-16" />
            </PopDiv>
            {projects.map((project, idx) => (
                <FadeDiv
                    key={`highlights-${project.title}`}
                    className="flex w-full flex-col"
                    whileInView={fadeIn(0.7 + idx * 0.1)}
                >
                    <ProjectCard project={project} />
                    <SmoothDivider
                        margin={
                            idx === projects.length - 1 ? 'mt-16 mb-8' : 'my-16'
                        }
                    />
                </FadeDiv>
            ))}
            <div className="flex items-center justify-center gap-3">
                <FadeSpan
                    whileInView={fadeIn(projects.length * 0.2 + 0.9)}
                    className="text-sm opacity-50"
                >
                    Se interessou?
                </FadeSpan>
                <PopSpan whileInView={popIn(projects.length * 0.2 + 1.1)}>
                    <Link
                        href={'/projects'}
                        className="flex items-center gap-1 font-bold transition duration-300 hover:text-pink-600"
                    >
                        <span>Ver mais projetos</span>
                        <IoMdArrowRoundForward className="text-[1.1rem]" />
                    </Link>
                </PopSpan>
            </div>
            <PopDiv
                className="flex w-full origin-left"
                initial={{ opacity: 0 }}
                whileInView={popIn(projects.length * 0.2 + 0.5)}
                viewport={{ once: true }}
            >
                <SmoothDivider margin="mt-8 mb-10 sm:mb-16" />
            </PopDiv>
        </section>
    );
};

export default HighlightsSection;
