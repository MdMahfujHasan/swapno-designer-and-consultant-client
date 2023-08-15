import { useLoaderData } from "react-router-dom";

const GarmentDetails = () => {
    const garmentDetails = useLoaderData();
    const { img, name, date, address, details } = garmentDetails;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-screen-lg mx-auto mt-6">
            <figure className="md:pl-4"><img src={img} /></figure>
            <div className="card-body">
                <h2 className="text-3xl text-cyan-500 font-thin">{name}</h2>
                <p className="text-slate-500 font-semibold">{address}</p>
                <p className="text-slate-500">{date}</p>
                <p className="text-slate-500">{details}</p>
            </div>
        </div>
    );
};

export default GarmentDetails;