import styled from "styled-components";
import TagAccumulateSlideList from "./TagAccumulateSlideList";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//#누적 투자 100억이상 전체 부분
const TagAccumulate = ({ photos }) => {
  return (
    <Wrap>
      <MyPosition>
        <h2>#누적 투자 100억이상</h2>
        <div className="allListBtn">
          <b>전체보기</b>
          <span className="accumulatePrev swiper-button-prev"></span>
          <span className="accumulateNext swiper-button-next"></span>
        </div>
      </MyPosition>
      <div>
        <TagAccumulateSlideList photos={photos} />
      </div>
    </Wrap>
  );
};

export default TagAccumulate;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px;
`;

const MyPosition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 0;

  .allListBtn > b {
    margin-right: 70px;
  }

  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: auto !important;
    right: 35px !important;
    color: #333;
  }

  .allListBtn > .accumulatePrev:after {
    padding: 5px 8px;
    border: 1px solid #ccc;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
    border-right: none;
    font-size: 12px;

    &:hover {
      background-color: #eee;
    }
  }

  .allListBtn > .accumulateNext:after {
    padding: 5px 8px;
    border: 1px solid #ccc;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    font-size: 12px;

    &:hover {
      background-color: #eee;
    }
  }
`;
