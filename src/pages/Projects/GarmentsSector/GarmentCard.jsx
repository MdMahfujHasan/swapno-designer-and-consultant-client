import BtnReadMore from "../../../components/BtnReadMore";

const GarmentCard = ({ garment }) => {
    const { _id, img, name, date, address, details } = garment;
    return (
        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
            <figure className="w-1/2 mx-auto rounded p-4"><img src={img} /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-thin text-cyan-500">{name}</h2>
                <p className="text-slate-500 font-semibold">{address}</p>
                <p className="text-slate-500">{date}</p>
                <p className="text-slate-500">{details}</p>
                <div>
                    <BtnReadMore to={`/projects/garments-sector/${_id}`} />
                </div>
            </div>
        </div>
    );
};

export default GarmentCard;