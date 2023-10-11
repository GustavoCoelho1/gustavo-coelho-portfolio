'use client';

import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { motion as m } from 'framer-motion';
import { useEffect } from 'react';
import { handleClickContact } from '@/app/components/pages/home/hero';

interface Props {
    active: boolean;
    setActive: (val: boolean) => any;
}

const Mobile: React.FC<Props> = ({ active, setActive }) => {
    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [active]);

    return (
        <>
            <button
                onClick={() => setActive(!active)}
                className="flex text-2xl text-white sm:hidden"
            >
                <IoMdMenu />
            </button>
            <m.div
                animate={
                    active
                        ? { opacity: 1, display: 'flex' }
                        : {
                              opacity: 0,
                              transition: { delay: 0.5, duration: 1 },
                              transitionEnd: { display: 'none' },
                          }
                }
                className="fixed bottom-0 left-0 right-0 top-0 flex h-screen bg-[#060010] sm:hidden"
            >
                <m.div className="relative flex h-full w-full flex-col items-center justify-around pt-[70px]">
                    <button
                        className="absolute right-6 top-[26px] text-2xl text-white"
                        onClick={() => setActive(false)}
                    >
                        <IoMdClose />
                    </button>
                    <m.a
                        href="/"
                        animate={
                            active
                                ? {
                                      opacity: 1,
                                      x: 0,
                                      transition: { duration: 0.5, delay: 0.1 },
                                  }
                                : {
                                      opacity: 0,
                                      x: 300,
                                      transition: { duration: 0.5 },
                                  }
                        }
                        className="flex h-full w-full items-center justify-center gap-3 border-t border-pink-500/70 text-2xl font-bold"
                    >
                        <span className="font-normal text-pink-500">#</span>{' '}
                        Home
                    </m.a>
                    <m.a
                        href="/projects"
                        animate={
                            active
                                ? {
                                      opacity: 1,
                                      x: 0,
                                      transition: { duration: 0.5, delay: 0.3 },
                                  }
                                : {
                                      opacity: 0,
                                      x: 300,
                                      transition: { duration: 0.5 },
                                  }
                        }
                        className="flex h-full w-full items-center justify-center gap-3 text-2xl font-bold"
                    >
                        <span className="font-normal text-pink-500">#</span>{' '}
                        Projetos
                    </m.a>
                    <m.a
                        animate={
                            active
                                ? {
                                      opacity: 1,
                                      x: 0,
                                      transition: { duration: 0.5, delay: 0.5 },
                                  }
                                : {
                                      opacity: 0,
                                      x: 300,
                                      transition: { duration: 0.5 },
                                  }
                        }
                        className="flex h-full w-full items-center justify-center gap-3 text-2xl font-bold"
                        onClick={() => {
                            handleClickContact();
                            setActive(false);
                        }}
                    >
                        <span className="font-normal text-pink-500">#</span>{' '}
                        <span className="text-pink-300">Entrar em Contato</span>
                    </m.a>
                </m.div>
            </m.div>
        </>
    );
};

export default Mobile;
