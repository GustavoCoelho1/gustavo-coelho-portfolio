import { CMSIcon } from '@/app/lib/utils';

interface Props {
    name: string;
    icon: string;
}

const TechBadge: React.FC<Props> = ({ name, icon }) => {
    return (
        <span className="flex rounded-2xl bg-pink-600/40 px-4 py-2 text-white transition duration-300 hover:bg-pink-600/70">
            <div className="pointer-events-none flex items-center justify-center gap-2 text-sm font-bold text-pink-300">
                <span className="text-lg">
                    <CMSIcon icon={icon} />
                </span>
                <span>{name}</span>
            </div>
        </span>
    );
};

export default TechBadge;
