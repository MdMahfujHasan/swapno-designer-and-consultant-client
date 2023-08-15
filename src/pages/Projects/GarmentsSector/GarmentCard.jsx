import BtnReadMore from "../../../components/BtnReadMore";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GarmentCard = ({ garment }) => {
    const { _id, img, name, date, address, details } = garment;
    return (
        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                freeMode={true}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className="w-[1200px]"
            >
                {
                    img.map((i, index) => <SwiperSlide key={index}><img src={i} /></SwiperSlide>)
                }
            </Swiper>
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