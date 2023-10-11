'use client';

import { WorkExperience } from '@/app/_types/workTrajectory';
import TrajectoryItem from './TrajectoryItem';
import { FadeDiv, FadeSpan, fadeIn } from '@/app/lib/animations';

interface Props {
    experiences: WorkExperience[];
}

const WorkTrajectorySection: React.FC<Props> = ({ experiences }) => {
    return (
        <section className="w-full bg-gradient-to-b from-[#060010] to-[#27023f] ">
            <div className="container my-14 flex flex-col gap-20 sm:my-28 lg:flex-row">
                <div className="flex flex-col gap-8 sm:max-w-[420px]">
                    <div className="flex flex-col gap-4">
                        <FadeSpan
                            whileInView={fadeIn(0.1)}
                            className="font-mono text-pink-600"
                        >
                            ../experiências
                        </FadeSpan>
                        <FadeSpan
                            whileInView={fadeIn(0.3)}
                            className="text-3xl font-bold"
                        >
                            Trajetória profissinal
                        </FadeSpan>
                    </div>

                    <FadeSpan
                        whileInView={fadeIn(0.5)}
                        className="text-white/70"
                    >
                        Venho me desenvolvendo na área de Tecnologia da
                        Informação há 2 anos, onde consegui conquistar um curso
                        Técnico e projetos como freelancer, e cada experiência é
                        um passo muito valioso para o meu desenvolvimento
                        pessoal e profissional.
                    </FadeSpan>
                </div>
                <div className="flex flex-col gap-14 lg:w-[60%]">
                    {experiences.map((item, idx) => (
                        <FadeDiv
                            key={'trajectory-item' + item.title + idx}
                            whileInView={fadeIn(idx * 0.1 + 0.7)}
                            className="flex w-full"
                        >
                            <TrajectoryItem experience={item} />
                        </FadeDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkTrajectorySection;
