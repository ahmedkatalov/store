import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { carousel } from "../../../shared/moks/carousel";

export const Carousel = () => {
  return (
    <div className="carousel">
      <h2>Виды птиц, для которых подойдет данный товар</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        speed={700}
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {carousel.map((item, id) => (
          <div className="" key={id}>
            <SwiperSlide>
              <div className="slide">
                <img src={item.img} alt="bird" /> <p>{item.name}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <img src={item.img} alt="bird" /> <p>{item.name}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
