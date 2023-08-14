const EmployeeCard = ({ employee }) => {
    const { img, name, designation, mobile, education } = employee;
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-3xl font-thin text-sky-400">{name}</h2>
                <p className="text-slate-500 font-bold">{designation}</p>
                <p className="text-slate-500">{education}</p>
                <p className="text-slate-500">{mobile}</p>
            </div>
        </div>
    );
};

export default EmployeeCard;