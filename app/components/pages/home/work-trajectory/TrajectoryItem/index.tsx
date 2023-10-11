import { WorkExperience } from '@/app/_types/workTrajectory';
import TechBadge from '@/app/components/design/TechBadge';
import { CMSRichText } from '@/app/lib/utils';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import ExperienceTime from './ExperienceTime';
import { PopDiv, PopSpan, popIn } from '@/app/lib/animations';

interface Props {
    experience: WorkExperience;
}

const Trajectoryexperience: React.FC<Props> = ({ experience }) => {
    return (
        <div className="flex gap-6 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <img
                    src={experience.companyLogo.url}
                    className="h-10 min-h-[60px] min-w-[60px] sm:min-h-[85px] sm:min-w-[85px]"
                    style={{ objectFit: 'contain' }}
                />

                <div className="h-full w-[1px] rounded-full bg-white/20" />
            </div>

            <div className="flex flex-col gap-2">
                <PopDiv
                    whileInView={popIn(0.1)}
                    className="origin-left text-sm text-white/50"
                >
                    {experience.role} •{' '}
                    <a
                        className="text-pink-300/80 transition duration-300 hover:text-pink-600"
                        href={experience.companyUrl}
                        target="_blank"
                    >
                        @{experience.companyName}
                    </a>
                </PopDiv>

                <PopSpan
                    whileInView={popIn(0.3)}
                    className="origin-left text-xl font-bold"
                >
                    {experience.title}
                </PopSpan>

                <PopDiv className="origin-left" whileInView={popIn(0.5)}>
                    <ExperienceTime
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                    />
                </PopDiv>

                <PopSpan
                    whileInView={popIn(0.7)}
                    className="mt-6 origin-left text-white/70"
                >
                    <CMSRichText content={experience.description.raw} />
                </PopSpan>

                <PopDiv
                    whileInView={popIn(0.7)}
                    className="mt-6 flex w-fit flex-col gap-1 text-sm text-pink-400/80"
                >
                    <span>Competências</span>
                    <div className="h-[2px] w-[30%] rounded-xl bg-pink-400/30" />
                </PopDiv>

                <div className="mt-2 flex max-w-[80%] flex-wrap gap-x-2 gap-y-3 sm:max-w-[70%]">
                    {experience.technologies.map((tech, idx) => (
                        <PopDiv
                            key={`experience-${tech.name}`}
                            whileInView={popIn(idx * 0.1 + 0.5)}
                        >
                            <TechBadge icon={tech.iconSvg} name={tech.name} />
                        </PopDiv>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trajectoryexperience;
