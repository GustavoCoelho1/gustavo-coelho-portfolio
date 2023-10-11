import { handleClickContact } from '../../pages/home/hero';
import Mobile from './Mobile';
import NavLink from './NavLink';

interface Props {
    mobileActive: boolean;
    setMobileActive: (val: boolean) => any;
}

export const NavBar: React.FC<Props> = ({ mobileActive, setMobileActive }) => {
    return (
        <>
            {/*Normal screen*/}
            <nav className="hidden items-center justify-between sm:flex sm:justify-around">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/projects">Projetos</NavLink>
                <NavLink onClick={handleClickContact}>Contato</NavLink>
            </nav>
            {/*Mobile screen*/}
            <Mobile active={mobileActive} setActive={setMobileActive} />
        </>
    );
};

export default NavBar;
