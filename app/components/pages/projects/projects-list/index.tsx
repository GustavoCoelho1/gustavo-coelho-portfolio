'use client';

import { Project } from '@/app/_types/project';
import ProjectCard from './ProjectCard';
import { PopDiv, popIn } from '@/app/lib/animations';

interface Props {
    projects: Project[];
}

const ProjectsListSection: React.FC<Props> = ({ projects }) => {
    return (
        <section className="w-full bg-[#060010]">
            <div className="container flex flex-wrap justify-center gap-x-5 gap-y-10 py-20 md:justify-start">
                {projects.map((project, idx) => (
                    <PopDiv
                        key={`projects-${project.title}`}
                        whileInView={popIn(0.1 * idx)}
                    >
                        <ProjectCard project={project} />
                    </PopDiv>
                ))}
            </div>
        </section>
    );
};
export default ProjectsListSection;
