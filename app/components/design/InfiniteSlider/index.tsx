'use client';

import styles from './index.module.css';

interface SliderProps {
    children: any;
}

/*import { motion as m } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';



const InfiniteSlider: React.FC<SliderProps> = ({ children }) => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const slider = useRef<any>();

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

export default InfiniteSlider;

*/

const InfiniteSlider: React.FC<SliderProps> = ({ children }) => {
    return (
        <div className="flex w-full">
            <div className="relative h-20 w-[200%] overflow-hidden border-gray-600">
                <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-[#060010] to-transparent" />
                <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-[#060010] to-transparent" />
                <div className={styles.child}>{children}</div>
            </div>
        </div>
    );
};

export default InfiniteSlider;
