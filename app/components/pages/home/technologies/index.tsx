'use client';

import { KnownTech } from '@/app/_types/page';
import { CMSIcon } from '@/app/lib/utils';
import getRelativeDuration from '@/app/utils/getRelativeDuration';
import { BiCodeAlt, BiExtension } from 'react-icons/bi';
import { motion as m } from 'framer-motion';
import { FadeDiv, FadeSpan, PopDiv, fadeIn, popIn } from '@/app/lib/animations';

interface Props {
    techs: KnownTech[];
}

const TechnologiesSection: React.FC<Props> = ({ techs }) => {
    return (
        <section className="flex w-full">
            <div className="flex h-full w-full flex-col justify-center sm:items-center">
                <FadeSpan
                    initial={{ opacity: 0 }}
                    whileInView={fadeIn(0.1)}
                    viewport={{ once: true }}
                    className="mb-10 font-mono text-pink-600"
                >
                    ../conhecimentos
                </FadeSpan>

                {/*<FadeDiv whileInView={fadeIn(0.3)} className="mb-6 flex">
                    <button className="mr-4 flex items-center gap-2 rounded-3xl bg-[#271049]/60 px-5 py-2 font-bold text-violet-100/90">
                        <BiCodeAlt className="text-xl" /> Hard skills
                    </button>
                    <button className="flex items-center gap-2 rounded-3xl px-5 py-2 text-violet-100/90">
                        <BiExtension className="text-xl" />
                        Soft skills
                    </button>
                </FadeDiv>*/}

                <m.div
                    whileInView={fadeIn(0.5)}
                    className="grid w-full grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3"
                >
                    {techs.map((tech, idx) => {
                        const relativeDuration = getRelativeDuration(
                            tech.startDate,
                            null,
                        );

                        return (
                            <PopDiv
                                key={`techs-${tech.name}`}
                                whileInView={popIn(idx * 0.2)}
                                className="sm:pr- flex items-center justify-between rounded-2xl border border-[#402469] bg-[#271049]/60 px-6 py-4 pr-6"
                            >
                                <div className="flex flex-col">
                                    <span className="mb-2 font-bold">
                                        {tech.name}
                                    </span>

                                    <span className="text-sm text-white/70">
                                        {relativeDuration} de experiência
                                    </span>
                                </div>
                                <div className="text-[2.5rem] text-white">
                                    <CMSIcon icon={tech.iconSvg} />
                                </div>
                            </PopDiv>
                        );
                    })}
                </m.div>
            </div>
        </section>
    );
};

export default TechnologiesSection;
