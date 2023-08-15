const SectionTitle = ({ children }) => {
    return (
        <div className="text-center mt-16 mb-8">
            <span className="font-semibold text-slate-700 text-3xl border-l-8 border-l-indigo-300 mx-auto pl-2 uppercase">{children}</span>
        </div>
    );
};

export default SectionTitle;