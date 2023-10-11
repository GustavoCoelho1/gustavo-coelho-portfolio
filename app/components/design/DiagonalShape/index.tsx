interface Props {
    children: any;
    bgColor: string;
}

const DiagonalShape: React.FC<Props> = ({ children, bgColor }) => {
    return (
        <div
            className={`relative flex h-full w-full items-center justify-center`}
        >
            <div
                style={{ transform: 'skewY(-5deg)', background: bgColor }}
                className="z-1 absolute inset-0 shadow-xl"
            />
            <div className="z-10 h-full w-full">{children}</div>
        </div>
    );
};

export default DiagonalShape;
