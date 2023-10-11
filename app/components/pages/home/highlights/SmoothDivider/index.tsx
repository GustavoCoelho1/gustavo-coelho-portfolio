interface Props {
    margin: string;
}

const SmoothDivider: React.FC<Props> = ({ margin }) => {
    return (
        <div
            className={`${margin} h-[2px] w-full rounded-3xl bg-violet-400/10`}
        />
    );
};

export default SmoothDivider;
