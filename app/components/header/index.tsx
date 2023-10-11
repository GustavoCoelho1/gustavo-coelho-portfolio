'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { Variants, motion as m } from 'framer-motion';
import Mobile from './NavBar/Mobile';
import { PopDiv, popIn } from '@/app/lib/animations';

export const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [mobileActive, setMobileActive] = useState(false);

    const innerVariants = {
        hide: {
            opacity: 0,
            y: '-110%',
        },

        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
            },
        },
    } as Variants;

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > prevScrollPos) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <header>
            <m.div
                className={`${
                    !visible && !mobileActive ? 'opacity-0' : 'opacity-100'
                } fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-black/80 to-transparent transition duration-500`}
            >
                <m.div
                    animate={!visible && !mobileActive ? 'hide' : 'show'}
                    variants={innerVariants}
                    className="container flex w-full items-center justify-between px-10 py-5"
                >
                    <PopDiv whileInView={popIn(0.1)}>
                        <Link href="/">
                            <Image
                                width={35}
                                height={35}
                                src={'/images/logo.png'}
                                alt="Logo GC Dev"
                            />
                        </Link>
                    </PopDiv>
                    <NavBar
                        mobileActive={mobileActive}
                        setMobileActive={setMobileActive}
                    />
                </m.div>
            </m.div>
        </header>
    );
};

export default Header;
