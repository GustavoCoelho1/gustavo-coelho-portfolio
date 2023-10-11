'use client';

import { motion as m } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface SliderProps {
    children: any;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const slider = useRef<any>();

    useEffect(() => {
        setSliderWidth(
            slider.current?.scrollWidth - slider.current?.offsetWidth,
        );
    }, []);

    return (
        <div
            ref={slider}
            className="relative flex h-full w-full overflow-hidden"
        >
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-[#060010] to-transparent" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-[#060010] to-transparent" />

            <m.div
                whileTap={{ cursor: 'grabbing' }}
                className="flex h-fit cursor-grab"
                drag="x"
                dragConstraints={{ right: 0, left: -sliderWidth }}
            >
                {children}
            </m.div>
        </div>
    );
};

export default Slider;
