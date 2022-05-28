// React
import { FunctionComponent } from 'react';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper Modules
import { Autoplay, Pagination, Navigation } from "swiper";

interface SliderProps {
  slides: Array<FunctionComponent>
  className?: string
  styles?: any
};

const Slider: FunctionComponent<any> = (props: SliderProps) => {
  const { className, styles, slides } = props;

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={400}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={className}
        style={styles}
      >
        <div className="swiper-wrapper">
          {
            slides.map((slide, i) => {
              return <SwiperSlide key={`slide-${i}`}>{slide}</SwiperSlide>
            })
          }
        </div>
      </Swiper>
    </>
  );
}

export default Slider
