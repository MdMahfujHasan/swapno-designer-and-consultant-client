import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://swapno-designer-and-consultant-server.vercel.app/our-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 gap-y-4 max-w-screen-xl mx-auto">
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default OurServices;