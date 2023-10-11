'use client';

import { CMSIcon } from '@/app/lib/utils';
import InfiniteSlider from '../InfiniteSlider';
import { motion as m } from 'framer-motion';
import { PopDiv, popIn } from '@/app/lib/animations';

interface Props {
    techs: {
        name: string;
        iconSvg: string;
    }[];
}

const KnownTechnologiesSlider: React.FC<Props> = ({ techs }) => {
    return (
        <div className="flex w-full items-center sm:w-1/2 sm:pt-28">
            <InfiniteSlider>
                {techs.map((tech, idx) => (
                    <PopDiv
                        key={`slider-tech-${tech.name}-1`}
                        animate={popIn(idx * 0.1, 0.5)}
                        title={tech.name}
                        className="mx-5 flex items-start justify-center rounded-full bg-violet-600/20 p-3 opacity-70 transition duration-300 hover:bg-violet-600/30 lg:mx-5"
                    >
                        <span className="rounded-full bg-white p-2 text-[1.75rem] text-[#291150]">
                            <CMSIcon icon={tech.iconSvg} />
                        </span>
                    </PopDiv>
                ))}
                {techs.map((tech, idx) => (
                    <PopDiv
                        key={`slider-tech-${tech.name}-2`}
                        animate={popIn(idx * 0.1, 0.5)}
                        title={tech.name}
                        className="mx-5 flex items-start justify-center rounded-full bg-violet-600/20 p-3 opacity-70 transition duration-300 hover:bg-violet-600/30 lg:mx-5"
                    >
                        <span className="rounded-full bg-white p-2 text-[1.75rem] text-[#291150]">
                            <CMSIcon icon={tech.iconSvg} />
                        </span>
                    </PopDiv>
                ))}
            </InfiniteSlider>
        </div>
    );
};

export default KnownTechnologiesSlider;
