'use client';

import { HomePageInfo } from '@/app/_types/page';
import { CMSIcon, CMSRichText } from '@/app/lib/utils';
import { CSSProperties } from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { motion as m } from 'framer-motion';
import { fadeIn } from '@/app/lib/animations';

const styles = {
    hero: {
        backgroundImage:
            'linear-gradient(360deg, rgb(6,0,16) 0%,transparent 59%),repeating-linear-gradient(315deg, rgba(93,67,116, 0.1) 0px, rgba(93,67,116, 0.1) 1px,transparent 1px, transparent 13px),repeating-linear-gradient(405deg, rgba(93,67,116, 0.1) 0px, rgba(93,67,116, 0.1) 1px,transparent 1px, transparent 13px),linear-gradient(360deg, rgb(6,0,16),rgb(6,0,16))',
    } as CSSProperties,
};

interface Props {
    heroInfo: HomePageInfo;
}

export const handleClickContact = () => {
    const contact = document.querySelector('#contact');

    if (contact) {
        contact.scrollIntoView({ behavior: 'smooth' });
    }
};

const HeroSection: React.FC<Props> = ({ heroInfo }) => {
    return (
        <section
            style={{ backgroundImage: styles.hero.backgroundImage }}
            className="flex min-h-screen w-full flex-col items-center justify-center sm:min-h-fit sm:pt-[70px]"
        >
            <m.div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 px-5 pt-[35px] sm:min-h-fit sm:gap-16 md:w-fit">
                <m.div
                    initial={{ opacity: 0 }}
                    animate={fadeIn(0.1)}
                    className="mb-10 flex w-full max-w-[380px] flex-col items-center gap-6 sm:mb-0 sm:max-w-[850px] sm:px-10 lg:px-20"
                >
                    <span className="self-start font-mono font-bold text-pink-600 sm:text-lg">
                        prazer, eu sou
                    </span>
                    <div className="flex max-w-[470px] flex-col px-[5%] text-[70px] font-bold leading-none tracking-tighter sm:text-[90px]">
                        <span className="self-start pr-10 sm:pr-20 ">
                            gustavo
                        </span>
                        <span className="self-end text-[50px] tracking-tight sm:tracking-tighter md:text-[60px]">
                            coelho
                        </span>
                    </div>

                    <div className="self-end font-mono font-bold text-violet-600 sm:px-0 sm:text-lg">
                        /* fullstack dev */
                    </div>
                </m.div>

                <m.div
                    initial={{ opacity: 0 }}
                    animate={fadeIn(0.3)}
                    className="px-5 text-center text-pink-100/70 sm:px-20 md:w-2/3 md:text-lg"
                >
                    <CMSRichText content={heroInfo.introduction.raw} />
                </m.div>

                <m.div
                    initial={{ opacity: 0 }}
                    animate={fadeIn(0.5)}
                    className="mt-8 flex w-full flex-col items-center justify-center gap-y-8 self-end sm:gap-y-10 md:mt-0"
                >
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-white">Vamos desenvolver?</span>
                        <button
                            onClick={() => handleClickContact()}
                            className="flex min-w-[300px] items-center justify-center gap-2 rounded-[30px] bg-gradient-to-tr from-pink-600 to-pink-500 px-7 py-5 text-xl font-bold shadow-button transition-all duration-300 hover:scale-105 md:px-8 md:py-6 md:text-2xl"
                        >
                            <span>entrar em contato</span>
                            <IoMdArrowRoundForward />
                        </button>
                    </div>

                    <div className="flex flex-row px-5 text-[30px] text-pink-400/75 md:text-[35px]">
                        {heroInfo.socials.map((social, idx) => (
                            <a
                                key={`social-${idx}`}
                                className="mx-3 transition duration-300 hover:text-pink-400"
                                href={social.url}
                                title={social.name}
                                target="_blank"
                            >
                                <CMSIcon icon={social.iconSvg} />
                            </a>
                        ))}
                    </div>
                </m.div>
            </m.div>
        </section>
    );
};

export default HeroSection;
