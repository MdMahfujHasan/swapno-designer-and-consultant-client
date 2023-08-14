import { Link } from "react-router-dom";

const BtnReadMore = ({ to }) => {
    return <Link to={to} className="btn btn-sm text-white rounded-none hover:bg-sky-500 btn-info">Read More</Link>
};

export default BtnReadMore;