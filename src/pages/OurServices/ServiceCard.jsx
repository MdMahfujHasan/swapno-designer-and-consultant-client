import BtnReadMore from '../../components/BtnReadMore';

const ServiceCard = ({ service }) => {
    const { _id, img, name, details } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 relative transition-transform transform-gpu hover:scale-110 hover:cursor-crosshair">
                <img src={img} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-3xl text-green-500 font-thin">{name}</h2>
                <p className='text-slate-500'>{details}</p>
                <BtnReadMore to={`/our-services/${_id}`}></BtnReadMore>
            </div>
        </div>
    );
};

export default ServiceCard;