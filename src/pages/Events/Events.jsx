import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useEffect } from "react";
import EventCard from "./EventCard";

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://swapno-designer-and-consultant-server.vercel.app/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <>
            <SectionTitle>Events</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-y-6">
                {
                    events.map(event => <EventCard
                        key={event._id}
                        event={event}
                    ></EventCard>)
                }
            </div>
        </>
    );
};

export default Events;