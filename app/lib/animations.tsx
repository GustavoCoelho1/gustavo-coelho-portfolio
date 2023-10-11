import { motion as m } from 'framer-motion';

export const easeIn = [0.6, -0.05, 0.001, 0.99];
export const easeOut = [0, 0, 0.2, 1];

export const fadeIn = (delay: number) => {
    return {
        opacity: 1,
        transition: {
            duration: 1,
            ease: easeIn,
            delay,
        },
    };
};

export const popIn = (delay: number, duration?: number) => {
    return {
        opacity: 1,
        scale: 1,
        transition: {
            duration: duration != undefined ? duration : 1,
            ease: easeIn,
            delay,
        },
    };
};

//Components
export const FadeDiv = ({ children, ...props }: any) => {
    return (
        <m.div {...props} initial={{ opacity: 0 }} viewport={{ once: true }}>
            {children}
        </m.div>
    );
};

export const FadeSpan = ({ children, ...props }: any) => {
    return (
        <m.span {...props} initial={{ opacity: 0 }} viewport={{ once: true }}>
            {children}
        </m.span>
    );
};

export const PopDiv = ({ children, ...props }: any) => {
    return (
        <m.div
            {...props}
            initial={{ opacity: 0, scale: 0 }}
            viewport={{ once: true }}
        >
            {children}
        </m.div>
    );
};

export const PopSpan = ({ children, ...props }: any) => {
    return (
        <m.span
            {...props}
            initial={{ opacity: 0, scale: 0 }}
            viewport={{ once: true }}
        >
            {children}
        </m.span>
    );
};
