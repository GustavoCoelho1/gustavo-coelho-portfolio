'use client';

import React, { useRef, useState } from 'react';
import './index.css'; // Estilos para o carousel (você pode personalizar conforme suas necessidades)

const MOCK_TECHS = [
    {
        logo: 'images/logos/nextjs.png',
        name: 'Next.js',
    },
    {
        logo: 'images/logos/typescript.png',
        name: 'Typescript',
    },
    {
        logo: 'images/logos/tailwind.png',
        name: 'Tailwind',
    },
    {
        logo: 'images/logos/nodejs.png',
        name: 'Node.js',
    },
    {
        logo: 'images/logos/php.png',
        name: 'PHP',
    },
    {
        logo: 'images/logos/mysql.png',
        name: 'MySQL',
    },
    {
        logo: 'images/logos/graphql.png',
        name: 'GraphQL',
    },
];

const Carousel = () => {
    const carouselRef = useRef<any>();

    // Função para repetir os itens de forma infinita quando o usuário arrasta para a esquerda
    const handleCarouselScroll = () => {
        const carousel = carouselRef.current;

        if (carousel.scrollLeft === 0) {
            carousel.scrollLeft = carousel.scrollWidth;
        } else if (
            carousel.scrollLeft ===
            carousel.scrollWidth - carousel.clientWidth
        ) {
            carousel.scrollLeft = 0;
        }
    };

    return (
        <div
            className="carousel-container"
            onScroll={handleCarouselScroll}
            ref={carouselRef}
        >
            <div className="carousel">
                {MOCK_TECHS.map((tech) => (
                    <div className="carousel-item">
                        <span
                            title={tech.name}
                            className="flex rounded-full bg-white/10 px-2 py-2 text-white transition duration-300 hover:bg-pink-600/70"
                        >
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="pointer-events-none min-h-[2.5rem] min-w-[2.5rem] opacity-60 sm:h-10 sm:w-10"
                            />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
