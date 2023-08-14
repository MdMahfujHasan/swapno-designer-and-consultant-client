import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner from '../../../assets/banner.jpg';

const Banner = () => {
    return (
        <Swiper
            pagination={{
                type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={banner} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner} />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;