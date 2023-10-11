import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RichText as CMSCMSRichText } from '@graphcms/rich-text-react-renderer';
import { ComponentProps } from 'react';

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

type CMSRichTextProps = ComponentProps<typeof CMSCMSRichText>;

export const CMSRichText = ({ ...props }: CMSRichTextProps) => {
    return (
        <CMSCMSRichText
            renderers={{
                bold: ({ children }) => (
                    <b className="text-gray-50">{children}</b>
                ),
            }}
            {...props}
        />
    );
};

type CMSIconProps = {
    icon: string;
};

export const CMSIcon = ({ icon }: CMSIconProps) => (
    <div dangerouslySetInnerHTML={{ __html: icon }} />
);
