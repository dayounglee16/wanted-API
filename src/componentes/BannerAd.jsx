import "./../App.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";

// 메인페이지) 배너광고
const BannerAd = ({ photos }) => {
  return (
    <Wrap>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {photos.slice(9, 14).map((bannerAdItem) => {
          return (
            <SwiperSlide key={bannerAdItem.id} className="swiperBanner">
              <div
                className="banner swiper-slide swiper-slide-active"
                style={{ backgroundImage: `url(${bannerAdItem.url})` }}
              >
                <h2>{bannerAdItem.title}</h2>
                <h3>{bannerAdItem.subTitle}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrap>
  );
};

export default BannerAd;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .banner {
    width: 100%;
    max-width: 1060px;
    margin: 0 auto;
    margin-top: 72px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 10px;
    background-color: #aaa;
    color: #fff;
  }
`;
