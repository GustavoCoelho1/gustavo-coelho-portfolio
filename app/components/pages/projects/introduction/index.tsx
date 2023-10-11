'use client';

import { FadeSpan, fadeIn } from '@/app/lib/animations';
import { CSSProperties } from 'react';

const styles = {
    projects: {
        backgroundImage:
            'linear-gradient(360deg, rgb(6,0,16) 0%,transparent 59%),repeating-linear-gradient(315deg, rgba(93,67,116, 0.1) 0px, rgba(93,67,116, 0.1) 1px,transparent 1px, transparent 13px),repeating-linear-gradient(405deg, rgba(93,67,116, 0.1) 0px, rgba(93,67,116, 0.1) 1px,transparent 1px, transparent 13px),linear-gradient(360deg, rgb(6,0,16),rgb(6,0,16))',
    } as CSSProperties,
};

const IntroductionSection = () => {
    return (
        <section
            style={{ backgroundImage: styles.projects.backgroundImage }}
            className="w-full"
        >
            <div className="container flex h-full w-full flex-col gap-10 pt-28">
                <div className="flex flex-col gap-3 md:items-center">
                    <FadeSpan
                        whileInView={fadeIn(0.1)}
                        className="font-mono text-pink-600"
                    >
                        ../projetos
                    </FadeSpan>
                    <FadeSpan
                        whileInView={fadeIn(0.3)}
                        style={{ textShadow: '0 0 20px white' }}
                        className="text-4xl font-bold"
                    >
                        Meus projetos
                    </FadeSpan>
                </div>

                <FadeSpan
                    whileInView={fadeIn(0.5)}
                    className="text-white/70 md:px-44 md:text-center"
                >
                    Aqui você pode conferir alguns dos meus melhores projetos.
                    Fique a vontade para navegar por eles, ver os processos de
                    criação e as tecnologias implementadas!
                </FadeSpan>
            </div>
        </section>
    );
};

export default IntroductionSection;
