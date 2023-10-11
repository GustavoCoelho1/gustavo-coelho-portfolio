import { differenceInMonths, differenceInYears } from 'date-fns';

const getRelativeDuration = (startDate: string, endDate: string | null) => {
    const end = endDate ? new Date() : new Date();
    const months = differenceInMonths(end, new Date(startDate));
    const years = differenceInYears(end, new Date(startDate));
    const remainingMonths = months % 12;

    const formattedDuration =
        years > 0
            ? `${years} ano${years > 1 ? 's' : ''}${
                  remainingMonths > 0
                      ? ` e ${remainingMonths} mes${
                            remainingMonths > 1 ? 'es' : ''
                        }`
                      : ''
              }`
            : `${months} mes${months > 1 ? 'es' : ''}`;

    return formattedDuration;
};

export default getRelativeDuration;
