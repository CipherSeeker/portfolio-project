import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";

const SwiperProject = ({ images }) => {
  // const images = [
  //   "//into-the-program.com/demo/images/sample010.jpg",
  //   "//into-the-program.com/demo/images/sample005.jpg",
  //   "//into-the-program.com/demo/images/sample012.jpg",
  //   "//into-the-program.com/demo/images/sample007.jpg",
  //   "//into-the-program.com/demo/images/sample008.jpg",
  //   "//into-the-program.com/demo/images/sample009.jpg",
  //   "//into-the-program.com/demo/images/sample012.jpg",
  // ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      centeredSlides
      autoplay={{ delay: 2000 }}
      initialSlide={3}
      loop={true}
      slidesPerView={1.5}
      spaceBetween={40}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 2.75,
        },
        1080: {
          slidesPerView: 3.25,
        },
        1280: {
          slidesPerView: 2,
        },
      }}
    >
      {images.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img src={imageUrl} alt={`Slide ${index + 1}`} loading="lazy" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

SwiperProject.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SwiperProject;
