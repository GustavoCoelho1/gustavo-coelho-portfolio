import { IoMdHeart } from 'react-icons/io';

const FooterSection = () => {
    return (
        <section className="flex w-full items-center justify-center bg-black py-3 text-xs">
            <span className="font-mono text-white">Desenvolvido com</span>

            <IoMdHeart className="mx-3 text-lg text-pink-700" />

            <span className="font-mono text-white">por Gustavo Coelho</span>
        </section>
    );
};

export default FooterSection;
