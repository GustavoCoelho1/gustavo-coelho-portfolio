interface Props {
    children: any;
}

const MobileLink: React.FC<Props> = ({ children }) => {
    return <div className="text-3xl">{children}</div>;
};

export default MobileLink;
