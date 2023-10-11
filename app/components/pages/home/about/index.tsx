'use client';

import { PopSpan, easeIn, fadeIn, popIn } from '@/app/lib/animations';
import { CMSRichText } from '@/app/lib/utils';
import { RichTextContent } from '@graphcms/rich-text-types';
import { motion as m } from 'framer-motion';
interface Props {
    aboutInfo: {
        raw: RichTextContent;
    };
}

const AboutSection: React.FC<Props> = ({ aboutInfo }) => {
    return (
        <m.section
            initial={{ opacity: 0 }}
            whileInView={fadeIn(0.1)}
            viewport={{ once: true }}
            className="flex max-w-[1000px] flex-col items-center justify-between gap-10 rounded-3xl bg-[#271049] p-8 md:flex-row"
        >
            <div className="relative order-2 h-[280px] w-full max-w-[300px] items-center justify-center rounded-3xl border border-violet-400/50 md:order-1 ">
                <img
                    src="/images/avatar.png"
                    alt="Avatar de Gustavo Coelho"
                    className="absolute left-0 right-0 top-[-20px] h-full w-full"
                    style={{
                        objectFit: 'contain',
                        zIndex: 0,
                    }}
                />
                <div className="absolute bottom-5 left-10 right-10 h-6 bg-gradient-to-t from-[#271049] to-transparent" />
            </div>
            <div className="order-1 flex flex-col gap-6 md:order-2 md:w-[60%]">
                <div className="flex flex-col gap-3">
                    <PopSpan
                        whileInView={popIn(0.3)}
                        className="origin-left font-mono text-pink-600"
                    >
                        ../sobre-mim
                    </PopSpan>
                    <PopSpan
                        whileInView={popIn(0.5)}
                        className="origin-left text-2xl font-bold sm:text-3xl"
                    >
                        Quem é o Gustavo?
                    </PopSpan>
                </div>

                <PopSpan
                    whileInView={popIn(0.7)}
                    className="origin-left text-white/60"
                >
                    <CMSRichText content={aboutInfo.raw} />
                </PopSpan>
            </div>
        </m.section>
    );
};

export default AboutSection;
