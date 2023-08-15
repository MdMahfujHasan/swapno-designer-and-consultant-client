import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GarmentDetails = () => {
    const garmentDetails = useLoaderData();
    const { img, name, date, address, details } = garmentDetails;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-screen-lg mx-auto mt-6">
            <Swiper
                slidesPerView={1}
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
                <h2 className="text-3xl text-cyan-500 font-thin">{name}</h2>
                <p className="text-slate-500 font-semibold">{address}</p>
                <p className="text-slate-500">{date}</p>
                <p className="text-slate-500">{details}</p>
            </div>
        </div>
    );
};

export default GarmentDetails;