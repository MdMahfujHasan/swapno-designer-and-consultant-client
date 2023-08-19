import { AiOutlineCheckCircle } from "react-icons/ai";
import useTheme from "../hooks/useTheme";

const ListItem = ({ children }) => {
    const { dark } = useTheme();
    const checkIcon = `text-xl ${dark ? "text-pink-500" : "text-green-500"}`;
    return (
        <li className={`mb-1 flex items-center gap-1 ${dark ? "text-slate-400" : "text-slate-500"}`}>
            <AiOutlineCheckCircle className={checkIcon} />{children}
        </li>
    )
};

export default ListItem;