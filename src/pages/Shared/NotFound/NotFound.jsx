import { Link } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';

const NotFound = () => {
    return (
        <div className="text-center p-4">
            <p className="text-5xl font-semibold text-indigo-500">404</p>
            <h3 className="text-3xl text-indigo-400 font-mono">Not Found</h3>
            <span className="btn btn-sm mt-4 btn-primary btn-outline">
                <Link to="/" className="flex items-center justify-center gap-1"><BsArrowLeft />Home</Link>
            </span>
        </div>
    );
};

export default NotFound;