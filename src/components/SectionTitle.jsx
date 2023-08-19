import useTheme from "../hooks/useTheme";

const SectionTitle = ({ children }) => {
    const { dark } = useTheme();
    return (
        <div className={`py-4 text-center mt-16 mb-8 ${dark && "bg-violet-950"}`}>
            <span className={`font-semibold text-3xl border-l-8 mx-auto pl-2 uppercase ${dark ? "text-slate-300 border-l-indigo-600" : "text-slate-700 border-l-indigo-300"}`}>{children}</span>
        </div>
    );
};

export default SectionTitle;