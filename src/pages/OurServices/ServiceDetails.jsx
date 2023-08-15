import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData();
    console.log(services);
    const { img, name, details, description } = services;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-screen-lg mx-auto p-8 mt-6">
            <figure className="w-full md:w-1/4"><img src={img} /></figure>
            <div className="card-body w-full md:w-3/4">
                <h2 className="text-3xl text-green-500 font-thin">{name}</h2>
                <p className="text-slate-500">{details}</p>
                <p className="text-slate-500">{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;