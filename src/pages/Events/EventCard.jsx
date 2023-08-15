import { useState } from 'react';
import BtnReadMore from '../../components/BtnReadMore';
import './EventCard.css';

const EventCard = ({ event }) => {
    const { _id, name, title, img, description } = event;
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="card card-compact w-96 lg:w-80 bg-base-100 shadow-xl">
            <figure

            >
                <img
                    className={`p-4 rounded-xl ${isHovered ? 'hovered' : ''
                        }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    src={img[0]} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="text-3xl text-indigo-500 font-thin">{name}</h2>
                <p className="text-slate-500 font-bold">{title}</p>
                <p className="text-slate-500">{description}</p>
                <div className="card-actions justify-end">
                    <BtnReadMore to={`/events/${_id}`}></BtnReadMore>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
