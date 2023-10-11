interface Props {
    children: any;
}

const DarkLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="w-full bg-[#060010] pt-28">
            <div className="container flex flex-col items-center gap-28 sm:gap-36">
                {children}
            </div>
        </div>
    );
};

export default DarkLayout;
