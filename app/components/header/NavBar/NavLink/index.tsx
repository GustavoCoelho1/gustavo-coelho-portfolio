'use client';

import { PopSpan, popIn } from '@/app/lib/animations';
import { usePathname } from 'next/navigation';

interface Props {
    children: any;
    href?: string;
    onClick?: () => any;
}

export const NavLink: React.FC<Props> = ({ children, href, onClick }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <a
            href={href}
            onClick={onClick ? onClick : undefined}
            className={`mx-4 ${isActive ? 'text-white' : 'text-white/60'}`}
        >
            <PopSpan
                className="flex origin-left cursor-pointer gap-3 text-lg font-bold"
                whileInView={popIn(0.2)}
            >
                <span className="text-pink-500">#</span>
                {children}
            </PopSpan>
        </a>
    );
};

export default NavLink;
