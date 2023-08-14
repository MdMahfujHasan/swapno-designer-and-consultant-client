import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const navItem = "mr-5 font-semibold uppercase hover:underline";
const NavItemWithDropdown = ({ label, links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <span className="dropdown dropdown-bottom uppercase">
            <label
                className='flex items-center hover:cursor-pointer font-semibold hover:underline mr-3'
                tabIndex={0}
                onClick={toggleDropdown}
            >
                <span>{label}</span>
                <MdKeyboardArrowDown className={`text-lg ${isOpen ? 'transform rotate-180' : ''}`} />
            </label>
            {isOpen && (
                <ul tabIndex={0} className="menu dropdown-content z-[1] shadow bg-base-100 w-56 mt-6">
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to} className={navItem}>
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
        <Link key="services" to="/our-services" className={navItem}>Our Services</Link>,
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
        <Link key="events" to="/events" className={navItem}>Events</Link>,
        <Link key="career" to="/career" className={navItem}>Career</Link>,
        <Link key="contact" to="/contact-us" className={navItem}>Contact Us</Link>
    ];

    return (
        <div className="navbar bg-sky-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <AiOutlineMenu className='text-xl' />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to="/" className="text-xl font-bold font-serif">
                    SWAPNO
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex bg-sky-300">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;