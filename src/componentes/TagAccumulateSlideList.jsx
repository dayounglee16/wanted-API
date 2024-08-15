import styled from "styled-components";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRecoilState } from "recoil";
import { AddCompanyItemState } from "../atom";

//누적투자 100억이상 슬라이드 리스트 부분
const TagAccumulateSlideList = ({ photos }) => {
  const [addCompanyItem, setAddCompanyItem] =
    useRecoilState(AddCompanyItemState);

  const clickFollow = (photo) => {
    if (addCompanyItem.find((companyItem) => companyItem.id === photo.id)) {
      setAddCompanyItem(
        addCompanyItem.filter((companyItem) => companyItem.id !== photo.id)
      );
    } else {
      setAddCompanyItem([...addCompanyItem, photo]);
    }
  };

  return (
    <Wrap>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          nextEl: ".accumulateNext",
          prevEl: ".accumulatePrev",
        }}
      >
        {photos.slice(14, 20).map((tagAccumulateItem) => {
          return (
            <SwiperSlide key={tagAccumulateItem.id}>
              <TagBox style={{ background: `url(${tagAccumulateItem.url})` }}>
                <TxtAligin>
                  <TxtLeft>
                    <img
                      className="companyLogo"
                      src={tagAccumulateItem.url}
                      alt={tagAccumulateItem.title}
                    />
                    <div className="tagTitle">
                      <span>{tagAccumulateItem.title}</span>
                      <span>{tagAccumulateItem.subTitle}</span>
                    </div>
                  </TxtLeft>

                  <TxtRight>
                    {addCompanyItem.includes(tagAccumulateItem) ? (
                      <button
                        className="followingBtn"
                        onClick={() => clickFollow(tagAccumulateItem)}
                      >
                        팔로잉
                      </button>
                    ) : (
                      <button
                        className="followBtn"
                        onClick={() => clickFollow(tagAccumulateItem)}
                      >
                        팔로우
                      </button>
                    )}
                  </TxtRight>
                </TxtAligin>
              </TagBox>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrap>
  );
};

export default TagAccumulateSlideList;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TagBox = styled.div`
  width: 100%;
  aspect-ratio: 5/3;
  background-color: #999;
  border-radius: 10px;
`;

const TxtAligin = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
`;

const TxtLeft = styled.div`
  line-height: 25px;
  display: flex;
  align-items: center;
  gap: 15px;

  .companyLogo {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #333;
  }

  .tagTitle {
    display: flex;
    flex-direction: column;
    color: #fff;
  }
`;

const TxtRight = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;

  .followBtn {
    padding: 7px 10px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0);
    border: 1.5px solid #fff;
    color: #fff;
    font-weight: bold;
  }

  .followingBtn {
    padding: 7px 10px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-weight: bold;
  }
`;
