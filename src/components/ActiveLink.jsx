import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    const active = "mr-5 font-semibold uppercase underline underline-offset-1"
    const inactive = "mr-5 font-semibold uppercase";
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? active : inactive}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;