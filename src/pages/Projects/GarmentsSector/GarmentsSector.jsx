import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import GarmentCard from "./GarmentCard";

const GarmentsSector = () => {
    const [garments, setGarments] = useState([]);
    useEffect(() => {
        fetch('https://swapno-designer-and-consultant-server.vercel.app/garments-sector')
            .then(res => res.json())
            .then(data => setGarments(data))
    }, [])
    return (
        <>
            <SectionTitle>Garments Sector</SectionTitle>
            <div className="grid grid-cols-1 mt-6 gap-y-8 max-w-screen-xl mx-auto">
                {
                    garments.map(garment => <GarmentCard
                        key={garment._id}
                        garment={garment}
                    ></GarmentCard>)
                }
            </div>
        </>
    );
};

export default GarmentsSector;