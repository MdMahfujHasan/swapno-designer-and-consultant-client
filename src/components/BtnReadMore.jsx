import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const BtnReadMore = ({ to }) => {
    const { dark } = useTheme();
    return <Link to={to} className={`btn btn-sm text-white rounded-none ${dark ? "btn-primary hover:bg-indigo-800" : "btn-info hover:bg-sky-500"}`}>Read More</Link>
};

export default BtnReadMore;