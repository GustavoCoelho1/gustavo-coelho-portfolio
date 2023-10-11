import getRelativeDuration from '@/app/utils/getRelativeDuration';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface Props {
    startDate: string;
    endDate: string;
}

const ExperienceTime: React.FC<Props> = ({ startDate, endDate }) => {
    const formatedStartDate = format(new Date(startDate), 'MMM yyyy', {
        locale: ptBR,
    });
    const formatedEndDate = endDate
        ? format(new Date(endDate), 'MMM yyyy', { locale: ptBR })
        : 'Momento';

    const formattedDuration = getRelativeDuration(startDate, endDate);

    return (
        <span className="text-sm text-white/50">
            {formatedStartDate} - {formatedEndDate} ({formattedDuration})
        </span>
    );
};

export default ExperienceTime;
