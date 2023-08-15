import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const EventDetails = () => {
    const eventDetails = useLoaderData();
    const { name, title, img, description } = eventDetails;
    return (
        <>
            <div className="w-3/4 mx-auto">
                <SectionTitle>{name}</SectionTitle>
                <div className="mt-4 mb-8">
                    <p className="text-slate-500 font-bold">{title}</p>
                    <p className="text-slate-500">{description}</p>
                </div>
            </div>
            <SectionTitle>Event Gallery</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-lg mx-auto gap-4">
                {
                    img.map((i, index) => <figure key={index}><img src={i} /></figure>)
                }
            </div>
        </>
    );
};

export default EventDetails;