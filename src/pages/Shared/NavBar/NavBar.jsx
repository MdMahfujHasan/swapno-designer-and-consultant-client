import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../components/ActiveLink';
import useTheme from '../../../hooks/useTheme';
import useAuth from '../../../hooks/useAuth';
import ProfileToggle from '../../../components/ProfileToggle';

const navItem = "mr-5 font-semibold uppercase";
const NavItemWithDropdown = ({ label, links }) => {
    const { dark } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <span className="dropdown dropdown-bottom uppercase">
            <label
                className='flex items-center hover:cursor-pointer font-semibold mr-3'
                tabIndex={0}
                onClick={toggleDropdown}
            >
                <span>{label}</span>
                <MdKeyboardArrowDown className={`text-lg ${isOpen ? 'transform rotate-180' : ''}`} />
            </label>
            {isOpen && (
                <ul tabIndex={0} className={`menu dropdown-content z-[2] shadow w-56 mt-6 ${dark ? "bg-blue-950 border border-indigo-700" : "bg-base-100"}`}>
                    {links.map(link => (
                        <li key={link.to}>
                            <Link to={link.to} className={`mr-5 font-semibold uppercase ${dark && "hover:bg-indigo-900 hover:text-primary-content"}`}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </span>
    );
};

const NavBar = () => {
    const { dark } = useTheme();
    const { user } = useAuth();
    console.log(user);
    const navOptions = [
        <Link key="home" to="/" className={navItem}>Home</Link>,
        <NavItemWithDropdown
            key="about"
            label="About Us"
            links={[
                { to: "/about-us/board-of-directors", label: "Board of Directors" },
                { to: "/about-us/our-team", label: "Our Team" },
            ]}
        />,
        <ActiveLink key="services" to="/our-services" className={navItem}>Our Services</ActiveLink>,
        <NavItemWithDropdown
            key="projects"
            label="Projects"
            links={[
                { to: "/projects/garments-sector", label: "Garments Sector" },
                { to: "/projects/telecom-sector", label: "Telecom Sector" },
                { to: "/projects/rhd-bangladesh", label: "Rhd Bangladesh" },
                { to: "/projects/bangladesh-railway", label: "Bangladesh Railway" },
                { to: "/projects/others", label: "Others" }
            ]}
        />,
        <ActiveLink key="events" to="/events" className={navItem}>Events</ActiveLink>,
        <ActiveLink key="career" to="/career" className={navItem}>Career</ActiveLink>,
        <ActiveLink key="contact" to="/contact-us" className={navItem}>Contact Us</ActiveLink>,
        <ProfileToggle key="profile"></ProfileToggle>
    ];

    return (
        <div className={`navbar ${dark ? "bg-indigo-950" : "bg-sky-300"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <AiOutlineMenu className={`text-xl ${dark && "text-primary-content"}`} />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-4 shadow bg-base-200 w-52 space-y-1">
                        {navOptions}
                    </ul>
                </div>
                <Link to="/" className={`ps-4 font-mono font-semibold text-2xl ${dark && "text-primary-content"}`}>
                    SWAPNO
                </Link>
            </div>
            <div className={`navbar-center hidden lg:flex items-center ${dark ? "bg-indigo-950 text-primary-content" : "bg-sky-300"}`}>
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;