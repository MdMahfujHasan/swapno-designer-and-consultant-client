const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-base-100 p-8 rounded shadow-md w-96 relative">
                <button
                    onClick={onClose}
                    className="absolute top-0 right-5 text-slate-500 text-2xl hover:cursor-pointer"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
