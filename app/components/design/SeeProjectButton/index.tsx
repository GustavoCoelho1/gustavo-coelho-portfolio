import { useRouter } from 'next/navigation';
import { IoMdArrowForward, IoMdArrowRoundForward } from 'react-icons/io';
import { Variants, motion as m } from 'framer-motion';
import { useState } from 'react';

interface Props {
    href: string;
}

const SeeProjectButton: React.FC<Props> = ({ href }) => {
    const [isHover, setIsHover] = useState(false);
    const { push } = useRouter();

    const variants = {
        animate: {
            x: 3,
            transition: { duration: 0.3 },
        },

        idle: {
            x: 0,
            transition: { duration: 0.3 },
        },
    } as Variants;

    return (
        <m.button
            onClick={() => push(href)}
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            className="flex w-fit items-center justify-center gap-2 rounded-xl border border-pink-500 px-5 py-3 text-pink-500 transition duration-300 hover:border-pink-400 hover:text-pink-400"
        >
            <span>Ver projeto</span>
            <m.span
                className="text-[1.15rem]"
                animate={isHover ? 'animate' : 'idle'}
                variants={variants}
            >
                <IoMdArrowRoundForward />
            </m.span>
        </m.button>
    );
};

export default SeeProjectButton;
