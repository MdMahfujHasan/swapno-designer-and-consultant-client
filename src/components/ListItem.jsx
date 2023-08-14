import { AiOutlineCheckCircle } from "react-icons/ai";

const ListItem = ({ children }) => {
    const checkIcon = "text-green-500 text-xl";
    return (
        <li className="mb-1 flex items-center gap-1 text-slate-500">
            <AiOutlineCheckCircle className={checkIcon} />{children}
        </li>
    )
};

export default ListItem;